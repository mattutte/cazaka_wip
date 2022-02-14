import React, { Component } from 'react'
import SmallCard from './SmallCard';

class ContentRowTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: '',
            brands: '',
            users: ''
        }
    }

    apiCall (url, handler) {
        fetch(url)
            .then( response => response.json() )
            .then( data =>  handler(data) )
            .catch ( error => console.log(error) )
    }

    componentDidMount() {
        console.log('montando API')
        this.apiCall('/api/products', this.showProducts)
        this.apiCall('/api/brands', this.showBrands)
        this.apiCall('/api/usuarios', this.showUsers) 
    }
    showProducts = (data) => {
        this.setState(
            {
                products: data.meta.total
            }
        )
    }
    showBrands = (data) => {
        this.setState(
            {
                brands: data.meta.total
            }
        )
    }
    showUsers = (data) => {
        console.log(data.meta)
        this.setState(
            {
                users: data.meta.count
            }
        )
    }

    componentDidUpdate() {
        // console.log('Actualizamos API')
    }

    render() {

        let productInDataBase = {
            color: "secondary",
            titulo: "Productos",
            valor: this.state.products,
            icono: "fas fa-film",
        }

        let amount = {
            color: "secondary",
            titulo: "Marcas",
            valor: this.state.brands,
            icono: "fas fa-award",
        }

        let user = {
            color: "secondary",
            titulo: "Usuarios",
            valor: this.state.users,
            icono: "fas fa-user",
        }

        let cardProps = [productInDataBase,amount,user];

        if (this.state.products === ''){
            productInDataBase.valor = 'Cargando..'
        } else {
            productInDataBase.valor = this.state.products
        }

        if (this.state.brands === ''){
            amount.valor = 'Cargando..'
        } else {
            amount.valor = this.state.brands
        }

        if (this.state.users === ''){
            user.valor = 'Cargando..'
        } else {
            user.valor = this.state.users
        }

        return (
            <React.Fragment>
                {/*<!-- Content Row -->*/}
                <div className="row">
                    {
                        cardProps.map((producto, index) => {
                            return <SmallCard  {...producto} key={index} />
                        })
                    }
                </div>
            </React.Fragment>

        )

    }
}

export default ContentRowTop;