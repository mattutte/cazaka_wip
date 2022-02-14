import React from 'react';

function ProductList(props){
    return(
        <React.Fragment>
            <tr >
				<td>{props.id}</td>
				<td>{props.name_product}</td>
				<td>{props.category}</td>
                <td>{props.Brand?.name_brand}</td>
				<td>{props.regular_price}</td>
			</tr>
        </React.Fragment>
    )
}
export default ProductList;