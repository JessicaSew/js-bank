import { useNavigate } from 'react-router-dom'
// import { useState, useEffect} from 'react'

const AccountTile = ( {account} ) => {
    const navigate = useNavigate()

    const handleClick = () => {
       navigate(`/accounts/${account.id}`)
    }
    return (
        <div onClick={handleClick}>
            <h3>{account.name}</h3>
            <h3>{account.account_number}</h3>
        </div>
    )
}

export default AccountTile