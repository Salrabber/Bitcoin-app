import React from 'react'
import { connect } from 'react-redux'
import Token from './token'
import {createToken} from '../redux/actions'




function TokenList(props){
    const keys = Object.keys(props.tokens)
    function clickHandler(){
        props.createToken({price: '$500'})
    }
    return(
        <ul>
            {
                keys.map((key, index) => {
                    return(
                        <Token
                        token={props.tokens[key]}
                        key={index+1}
                        index={index+1}
                    />
                    )
                })
            }
            <button onClick={clickHandler}><p>Load state</p></button>
            <p>Data: {JSON.stringify(props.actualPrice)}</p>
        </ul>
    )
    
}

const mapStateToProps = state => {
    return {
        actualPrice: state.tokens.tokens
    }
}

const mapDispatchToProps = {
    createToken
}


export default connect(mapStateToProps, mapDispatchToProps)(TokenList)