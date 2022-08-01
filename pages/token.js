import Link from 'next/link'
import classes from '../styles/token.module.scss'

export default function Token({token, index}){
    return(
        <li className='list-group-item'>
            <Link href={'/token/'+ index}><a><p>More </p></a></Link>
            <p>{token.code}</p>
            <p>${token.rate}</p>
        </li>
        
    )
}