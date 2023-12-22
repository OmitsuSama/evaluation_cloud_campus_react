import React, {useState} from "react"
import UserCard from './UserCard'

export default function Users(){
    const [users, setUsers] = useState([
        {
            id: 1,
            image: "/img/male.png",
            prenom: 'Lance Adrian Walter',
            nom: 'Goodman',
            age: "19",
            gender: 'Male'
        },
        {
            id: 2,
            image: "/img/female.png",
            prenom: 'Asmira Ilidithas',
            nom: 'Ardan',
            age: "20",
            gender: 'Female'
        },
        {
            id: 3,
            image: "/img/vader.jpg",
            prenom: 'Darth',
            nom: 'Vader',
            age: "45",
            gender: 'Male'
        },
        {
            id: 4,
            image: "/img/rukia.jpg",
            prenom: 'Rukia',
            nom: 'Kuchiki',
            age: "500",
            gender: 'Female'
        }
    ])
    return(
        <div>
            <h1>Liste des Utilisateurs</h1>
            <div className="container mt-4">
                <div className="row">
                    {users.map((user, index)=>{
                        return(
                            <div className="col-md-3">
                                <UserCard key={index} user={user} />
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}