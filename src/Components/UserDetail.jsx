import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



export const UserDetail = ({ resultado }) => {
    const [avatar, setAvatar] = useState()
    const [name, setName] = useState()
    const [login, setLogin] = useState()
    const [location, setLocation] = useState()

    const { username } = useParams();


    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}`).then(response => {

            setAvatar(response.data.avatar_url);
            setName(response.data.name);
            setLogin(response.data.login);
            setLocation(response.data.location)
        }
        )
    }, [])

    return (
        <>
            <div className='info-container'>

                <img src={avatar} alt='avatar de usuario' />
                <div className='name'>{name}</div>
                <div className='user'>{login}</div>
                <div className='place'>{location}</div>
            </div>
        </>
    )
}
