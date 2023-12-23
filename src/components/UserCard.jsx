import React from 'react';

export default function UserCard({ user, displayFormUpdateUser }) {
  const getProfileImage = (gender) => {
    return gender === 'Male' ? '/img/mando.jpg' : '/img/leia.jpg';
  };

  return (
    <div className="card" onClick={() => displayFormUpdateUser(user)}>
      {user.image ? (
        <img src={user.image} className="card-img-top" alt="img Ref" />
      ) : (
        <img
          src={getProfileImage(user.gender)}
          className="card-img-top"
          alt="img Ref"
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{user.prenom} {user.nom}</h5>
        <p className="card-text">Age : {user.age}</p>
        <p className="card-text">Gender : {user.gender}</p>
      </div>
    </div>
  );
}
