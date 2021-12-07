import {useState, useEffect} from 'react'
import AccountTile from './AccountTile'

const AccountList = () => {
    const [ accounts, setAccounts ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/accounts")
        .then( res => res.json())
        .then(setAccounts)
    }, [])

    return (
        <div>
            <h2>Accounts</h2>
            <ul>
                {accounts.map(account => <AccountTile account={account}/>)}
            </ul>
        </div>
    )
}

export default AccountList