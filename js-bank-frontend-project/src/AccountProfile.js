import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const AccountProfile = () => {
    const { id } = useParams();
    const [account, setAccount] = useState({})
    useEffect(() => {
        fetch("http://localhost:3000/accounts/"+ id)
        .then(res => res.json())
        .then(account => setAccount(account))

    }, [id])

    return (
        <div>
            <h1>{account.name}</h1>
            <h4>Account Number: {account.account_number}</h4>
            <h4>Balance: {account.balance}</h4>
        </div>
    )
}

export default AccountProfile