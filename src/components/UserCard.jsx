import React from 'react'

export default function UserCard({user, displayFormUpdateUser}) {
    return (
        <div className="card" onClick={()=>{
            displayFormUpdateUser(user)
          }}>
            {user.image ? (
                // Si user.image existe, afficher l'image de l'utilisateur
                <img src={user.image} className="card-img-top" alt="img Ref" />
            ) : (
                // Si user.image est nul, afficher l'image par défaut
                <img src="/img/mando.jpg" className="card-img-top" alt="img Ref" />
            )}
            <div className="card-body">
                <h5 className="card-title">{user.prenom} {user.nom}</h5>
                <p className="card-text">Age : {user.age}</p>
                <p className="card-text">Gender : {user.gender}</p>
            </div>
        </div>
    )
}