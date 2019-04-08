import React, {Component} from 'react';
import axios from "axios";
import MediaCard from "./MediaCard";

import '../CSS/productDetails.css';

class ProductDetails extends Component {
    state = {
        selectedProduct: {},
    };

    componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/tdmichaelis/typicode/products?id=${this.props.match.params.id}`)
            .then((data) => {
                this.setState({selectedProduct: data.data[0]});
            });
    }

    render() {

        return (
            <div className='productContainer'>
                <MediaCard
                    itemId={this.state.selectedProduct.id}
                    title={this.state.selectedProduct.title}
                    description={this.state.selectedProduct.description}
                    image={this.state.selectedProduct.img}
                    price={this.state.selectedProduct.price}
                    rating={this.state.selectedProduct.rating}
                />
            </div>
        );
    }
}

export default ProductDetails;
