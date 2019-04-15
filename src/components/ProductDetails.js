import React, {Component} from 'react';
import MediaCard from "./MediaCard";

import '../CSS/productDetails.css';
import store from "./Store";
import products from "../API/products";

class ProductDetails extends Component {
    componentDidMount() {
        this.getProduct();
    }

    componentWillUnmount() {
    }

    getProduct = async () => {
        const response = await products.get(`/products?id=${this.props.match.params.id}`);
        store.dispatch({
            type: 'SELECT_PRODUCT',
            selectedItem: response.data[0]
        });
    };

    render() {
        return (
            <div className='productContainer'>
                {
                    store.getState().selectedProduct ?
                        <MediaCard
                            item={store.getState().selectedProduct}
                            itemId={store.getState().selectedProduct.id}
                            title={store.getState().selectedProduct.title}
                            description={store.getState().selectedProduct.description}
                            image={store.getState().selectedProduct.img}
                            price={store.getState().selectedProduct.price}
                            rating={store.getState().selectedProduct.rating}
                            addCart={this.props.addCart}
                        />
                        :
                        ''
                }
            </div>
        );
    }
}

export default ProductDetails;
