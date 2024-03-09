import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"

export const Adder = ({ lista }) => {

    const [users, setUsers] = useState(lista)
    const [resultado, setResultado] = useState("")
    const [username, setUsername] = useState("")

    const handleClick = (user) => {
        axios.get(`https://api.github.com/users/${user}`).then(response =>
            setResultado(response.data)
        )
    }


    const handleUser = (e) => {
        setUsername(e.target.value)
    }


    const handleAdd = () => {
        setUsers((prevUsers) => {
            const newUsers = [...prevUsers, username];
            return newUsers;
        });
        console.log(resultado)
    }
    return (
        <>
            <div className="container">


                <div>
                    <input type="text" placeholder="Ingrese su user de github.." onChange={handleUser} />
                    <button onClick={handleAdd}>Add</button>
                </div>
                {users.map((user, i) =>
                    <div>
                        <Link to={`/api/user/${user}`} onClick={() => handleClick(user)} resultado={resultado}>
                            {user}
                        </Link >
                    </div>
                )}
            </div>
        </>
    )
}
