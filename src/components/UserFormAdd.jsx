import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function UserFormAdd({
  addUser,
  hideFormUpdateUser,
  context,
  updateUser,
  deleteUser,
  userToEdit,
}) {
  const [nom, setNom] = useState(context === 'edit' ? userToEdit.nom : '');
  const [prenom, setPrenom] = useState(context === 'edit' ? userToEdit.prenom : '');
  const [age, setAge] = useState(context === 'edit' ? userToEdit.age : '');
  const [gender, setGender] = useState(context === 'edit' ? userToEdit.gender : '');

  const handleClose = () => {
    hideFormUpdateUser(false);
  };

  const handleDelete = () => {
    deleteUser(userToEdit.id);
    handleClose();
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="text-center">{context === 'edit' ? 'Modifier un utilisateur' : 'Ajouter un utilisateur'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNom('');
            setPrenom('');
            setAge('');
            setGender('');

            if (context === 'add') {
              addUser(nom, prenom, age, gender);
            } else {
              updateUser(nom, prenom, age, gender, userToEdit.id);
            }
            handleClose();
          }}
        >
           <div className="form-group">
                <label>Nom</label>
                <input type="text" className="form-control" value={nom} onChange={(e)=>{ setNom(e.target.value) }}/>
            </div>
            <div className="form-group">
                <label>Prenom</label>
                <input type="text" className="form-control" value={prenom} onChange={(e)=>{ setPrenom(e.target.value) }}/>
            </div>
            <div className="form-group">
                <label>Age</label>
                <input type="text" className="form-control" value={age} onChange={(e)=>{ setAge(e.target.value) }}/>
            </div>
            <div className="form-group">
                <label>Genre</label>
                <select className="form-select" aria-label="Default select example" value={gender} onChange={(e)=>{ setGender(e.target.value) }}>
                    <option selected>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className="form-group text-center m-4">
                <input type="submit" className="btn btn-primary w-100" value={context === 'edit' ? 'Modifier' : 'Ajouter'} />
                {context === 'edit' && (
                <button type="button" className="btn btn-danger mt-2 w-100" onClick={() => deleteUser(userToEdit.id)}>
                    Supprimer
                </button>
                )}
                <button className="btn btn-secondary mt-2 w-100" onClick={() => hideFormUpdateUser(false)}>
                Fermer
                </button>
            </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}