import React, {Component} from 'react';
import MediaCard from "./MediaCard";

import '../CSS/productDetails.css';
import store from "./Store";
import products from "../API/products";

class ProductDetails extends Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
        this.getProduct();
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
                            itemId={store.getState().selectedProduct}
                            title={store.getState().selectedProduct.title}
                            description={store.getState().selectedProduct.description}
                            image={store.getState().selectedProduct.img}
                            price={store.getState().selectedProduct.price}
                            rating={store.getState().selectedProduct.rating}
                        />
                        :
                        ''
                }
            </div>
        );
    }
}

export default ProductDetails;
