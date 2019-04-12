import React, {Component} from 'react';

import SearchBar from './SearchBar'

import '../CSS/productList.css';

class ProductList extends Component {
    state = {
        tab: 0,
        filterList: []
    };

    changeTab = (tabValue) => {
        this.setState({
            tab: tabValue
        })
    };

    render() {
        return (
            <div className='mainContainer'>
                <SearchBar itemArray={this.props.apiData} stateTab={this.state.tab} changeTab={this.changeTab}/>
            </div>
        );
    }
}

export default ProductList;

