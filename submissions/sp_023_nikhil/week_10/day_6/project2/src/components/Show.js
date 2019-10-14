import React from 'react'
import { connect } from 'react-redux'

class Show extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render() {
        let a = this.props.player.map(elm => <li>{elm.name}</li>)
        return(
            <>
                {a}
            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        player: state.data
    }
}


export default connect (mapStateToProps, null) (Show)