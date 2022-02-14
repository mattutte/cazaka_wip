import React, { Component } from 'react';
// import image from '../assets/images/lastProduct.png';

class LastMovieInDB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            description: ''
        }
    }

    apiCall(url, handler) {
        fetch(url)
            .then(response => response.json())
            .then(data => handler(data))
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.apiCall('/api/products', this.showProducts)
    }

    showProducts = (data) => {
        console.log(data.data[data.data.length - 1])
        let lastProduct = data.data[data.data.length - 1]
        this.setState(
            {
                name: lastProduct.name_product,
                image: lastProduct.imageUrl,
                description: lastProduct.description_product
            }
        )
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Nuestra Cazaka Mas Reciente</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 20 + 'rem' }} src={this.state.image} alt={this.state.name} />
                            </div>
                            <p> {this.state.description} </p>
                            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default LastMovieInDB;