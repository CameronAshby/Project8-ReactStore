import React, {Component} from 'react';
import axios from "axios";

class ProductDetails extends Component {
    render() {
        let currentProduct = axios.get(`https://my-json-server.typicode.com/tdmichaelis/typicode/products?id=${this.props.match.params.id}`)
            .then((data) => {
                console.log(data.data[0]);
                return data.data[0];
            });

        return (
            <div>
                Product Details
                <div>{currentProduct.title}</div>
            </div>
        );
    }
}

export default ProductDetails;
