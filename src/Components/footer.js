import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAction, decrementAction } from "../Redux/Actions/actions"

export class footer extends Component {
    incrementValue = () => {
        this.props.increAction(1)
    }
    decrementValue = () => {
        this.props.decreAction(1)
    }
    render() {
        return (
            <div>
                <h1>Footer</h1>
                <button onClick={this.incrementValue}>Increament</button>
                <button onClick={this.decrementValue}>Decreament</button>
            </div>
        )
    }
}
//after the click of button the value(payload) is added to increaction , which is then 
//dispatched to the action.js which has increamentAction as function, which further
//send the call to the reducers.js in which as per type from action is matched to 
//switch case in reducer and the initial state is made to change




// const mapStateToProps = (state) => ({
    
// }) if using write export default connect(mapStateToProps, mapDispatchToProps)(footer)

const mapDispatchToProps = (dispatch) => ({
    increAction: (payload) => dispatch(incrementAction(payload)),
    decreAction: (payload) => dispatch(decrementAction(payload))
})

export default connect(null, mapDispatchToProps)(footer)





// import React from 'react';

// const Footer = () => {
//     return ( <div>
//         <h1>Footer</h1>
//     </div> );
// }
 
// export default Footer;