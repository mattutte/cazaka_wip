import React, {Component} from 'react';
import ProductList from './ProductList';

class Products extends Component{
    constructor(){
        super();
        this.state = {
            products : [] //estado inicial
        }

    }

    componentDidMount(){
        fetch('/api/products')
        .then(response => {
            return response.json()
        })
        .then(products =>{
            this.setState({
                products: products.data
            })
        })
    }

	render(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Todos Nuestros Productos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered table-striped table-hover" id="dataTable" width="100%" cellspacing="0">
									<thead className='table-primary'>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Categoria</th>
                                            <th>Premios</th>
                                            <th>Precio</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Categoria</th>
                                            <th>Premios</th>
                                            <th>Precio</th>
										</tr>
									</tfoot>
									<tbody>
									{
                                    this.state.products.map((product, index)=>{
                                        return  <ProductList  {...product}  key={product + index} />
                                    })
                                	}
										{/* <tr>
											<td>01</td>
											<td>Reto al destino</td>
											<td>20</td>
                                            <td>15</td>
											<td>120</td>
										</tr>
										<tr>
											<td>02</td>
											<td>La caida del halcon negro</td>
											<td>10</td>
											<td>18</td>
											<td>240</td>
										</tr> */}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
	}
}
export default Products;