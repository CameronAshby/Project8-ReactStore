import React, {Component} from 'react';

import MediaCard from './MediaCard';

class ProductList extends Component {

    render() {
        let items = this.props.apiData ? this.props.apiData : [];
        let itemList = items.map((item) => {
            return (
                <MediaCard
                    title={item.title}
                    description={item.description}
                    image={item.img}
                    price={item.price}
                />
            )
        });
        return (
            <div>
                ProductListPage
                <div>
                    {
                        itemList
                    }
                </div>
            </div>
        );
    }
}

export default ProductList;

