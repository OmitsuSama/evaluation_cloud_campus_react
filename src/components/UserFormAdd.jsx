import React,{useState, useEffect} from 'react'


export default function UserFormAdd({addUser, hideFormUpdateUser, context, updateUser, userToEdit}){

    const [nom, setNom] = useState(context === 'edit' ? userToEdit.nom : '')
    const [prenom, setPrenom] = useState(context === 'edit' ? userToEdit.prenom : '')
    const [age, setAge] = useState(context === 'edit' ? userToEdit.age : '')
    const [gender, setGender] = useState(context === 'edit' ? userToEdit.gender : '')

    return(
        <div className="popup-overlay">
            <div className="m-3 border p-3 rounded-3" style={{backgroundColor: '#ffffffd6'}}>
                
                <h2>Ajout d'un utilisateur</h2>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    setNom('')
                    setPrenom('')
                    setAge('')
                    setGender('')

                    if(context === 'add'){
                        addUser(nom, prenom, age, gender)
                    }else{
                        updateUser(nom, prenom, age, gender, userToEdit.id)
                    }
                    
                }}>
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
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value={context === 'edit' ? 'Modifier' : "Ajouter"}/>
                    </div>
                </form>     
                <button className="btn btn-secondary" onClick={()=>{
                    hideFormUpdateUser(false)
                }}>Fermer</button>
            </div>       
        </div>
    )

}