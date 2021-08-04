//different from topbar as it send and receives the data
//component 1st invokes a change in state, after this the data goes to action in form of payload

import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts, addProductToCart } from '../Redux/Actions/actions' //calling the actions
import Card from './card'

export class Home extends Component {
    componentDidMount() {
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product") //the getProducts defined in action get the data
        .then(({data}) => this.props.getProducts(data)) //sending data
    }

    addProduct = (item) => {
        this.props.addProductToCart(item) //sending data
    }


    render() {
        const { products=[] } = this.props;

        return (
            <div>
                {products.length && products.map((item, i) => <Card key={i} item={item} addProduct={this.addProduct} />)}
            </div>
        )
    }
}

//data received from reducers
const mapStateToProps = (state) => ({ //receiving state as props
    products: state.productReducer.products
})


//this peice sends data to the reducers to update the state as props
//data is send to actions
const mapDispatchToProps = (dispatch) => ({ //the getproduct dispatch the data to reducer which matches the type and changes the state with payload
    getProducts: (payload) => dispatch(getProducts(payload)),
    addProductToCart: (payload) => dispatch(addProductToCart(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
