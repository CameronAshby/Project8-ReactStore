import React, {Component} from 'react';
import axios from "axios";

class ProductList extends Component {
    state = {
        apiData: [],
    };

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
            .then((data) => {
                this.setState({apiData: data.data});
                console.log(this.state.apiData);
            })
    }
    render() {
        console.log(this.state.apiData);
        return (
            <div>
                ProductListPage
                <div>
                    {
                        this.state.apiData.forEach((item) => {
                            return (
                                <div>{item.id}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ProductList;

