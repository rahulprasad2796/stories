//write rcredux to add all the syntax

import React, { Component } from 'react'
import { connect } from 'react-redux'


//higher order component
export class Topbar extends Component {
    render() {
        const {userType, count} = this.props;
        return (
            <div>
                <h1>Topbar {userType} {count} </h1>
            </div>
        )
    }
}

//stor data is used here as props
const mapStateToProps = (state) => ({
    userType: state.userType,
    count: state.count
})

// const mapDispatchToProps = {
    
// } if using write  export default connect(mapStateToProps, mapDispatchToProps)(Topbar)

export default connect(mapStateToProps, null)(Topbar)








// import React from 'react';

// const Topbar = () => {
//     return ( <div>
//         <h1>Topbar</h1>
//     </div> );
// }
 
// export default Topbar;