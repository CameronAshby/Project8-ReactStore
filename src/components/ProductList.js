import React, {Component} from 'react';

import MediaCard from './MediaCard';

import '../CSS/productList.css';

class ProductList extends Component {

    render() {
        let items = this.props.apiData ? this.props.apiData : [];
        let itemList = items.map((item, index) => {
            return (
                <div className='card'
                     key={index}
                >
                    <MediaCard
                        item={item}
                        detail={true}
                    />
                </div>
            )
        });
        return (
            <div className='mainContainer'>
                <div className='cardContainer'>
                    {itemList}
                </div>
            </div>
        );
    }
}

export default ProductList;

