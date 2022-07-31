import Token from './token'

export default function TokenList(props){
    const keys = Object.keys(props.tokens)
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
        </ul>
    )
}