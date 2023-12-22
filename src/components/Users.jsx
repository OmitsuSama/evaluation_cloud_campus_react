import React, {useState} from "react"
import UserCard from './UserCard'
import UserFormAdd from "./UserFormAdd"
import { v4 as uuidv4 } from 'uuid'


export default function Users(){
    const [users, setUsers] = useState([
        {
            id: '1',
            image: "/img/male.png",
            prenom: 'Lance Adrian Walter',
            nom: 'Goodman',
            age: "19",
            gender: 'Male'
        },
        {
            id: '2',
            image: "/img/female.png",
            prenom: 'Asmira Ilidithas',
            nom: 'Ardan',
            age: "20",
            gender: 'Female'
        },
        {
            id: '3',
            image: "/img/vader.jpg",
            prenom: 'Darth',
            nom: 'Vader',
            age: "45",
            gender: 'Male'
        },
        {
            id: '4',
            image: "/img/rukia.jpg",
            prenom: 'Rukia',
            nom: 'Kuchiki',
            age: "500",
            gender: 'Female'
        }
    ])
    const [formAddUserVisible, setFormAddUserVisible] = useState(false)
    const [userToEdit, setUserToEdit] = useState(null)
    const addUser = (prenom, nom, age, gender) => {
        const newUser = {
            id: uuidv4(),
            prenom: prenom,
            nom: nom,
            age: age,
            gender: gender
        }

        setUsers([...users, newUser])
    }
    const displayFormUpdateUser = (table) => {
        setFormAddUserVisible(true)
        setUserToEdit(table)
    }
    const hideFormUpdateUser = () => {
        setFormAddUserVisible(false)
        setUserToEdit(null)
    }
    const updateUser = (userPrenom, userNom, userAge, userGender, id_user) => {

        let newUsers = [...users]
        let index = newUsers.findIndex(u => u.id === id_user)
        newUsers[index].prenom = userPrenom
        newUsers[index].nom = userNom
        newUsers[index].age = userAge
        newUsers[index].gender = userGender
        setUsers(newUsers)
        hideFormUpdateUser()
    }
    return(
        <div>
            <h1>Liste des Utilisateurs</h1>
            <div className="d-flex justify-content-end">
                <button className="btn btn-primary" onClick={()=>{ setFormAddUserVisible(true) }}>Ajouter un Utilisateur</button>
            </div>
            {formAddUserVisible && <UserFormAdd updateUser={updateUser} userToEdit={userToEdit} addUser={addUser} context={userToEdit === null ? 'add' : 'edit'} hideFormUpdateUser={hideFormUpdateUser} />}
            <div className="container mt-4">
                <div className="row">
                    {users.map((user, index)=>{
                        return(
                            <div className="col-md-3">
                                <UserCard key={index} displayFormUpdateUser={displayFormUpdateUser} user={user} />
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}