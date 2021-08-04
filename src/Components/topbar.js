//write rcredux to add all the syntax

import React, { Component } from 'react'
import { connect } from 'react-redux'


//higher order component
//from the store the props are received as state from the deffined reducers 
//no need to define different function, all the states can be accessed here
export class Topbar extends Component {
    render() {
        const {userType, count, cart} = this.props;

        return (
            <div>
                <h1>Topbar {userType} {count} {cart.length} </h1>
            </div>
        )
    }
}

//store state data is used here as props
//common way to receive state just use the reducer
//we receive data from reducers
const mapStateToProps = (state) => ({
    userType: state.addReducer.userType,
    count: state.addReducer.count,
    cart: state.productReducer.cart
})

//here the state will be received as props

//send data to actions
// const mapDispatchToProps = {
    
// } if using write  export default connect(mapStateToProps, mapDispatchToProps)(Topbar)

export default connect(mapStateToProps, null)(Topbar)
