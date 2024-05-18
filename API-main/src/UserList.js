import React, {useState,useEffect} from 'react'
import axios from 'axios'
const UserList = () => {
const [listOfUSer,setlistOfUSer]= useState([])

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        console.log(res);
        setlistOfUSer(res.data);
        
    })
    .catch((err)=>{
        console.log(err);
       
    })
}, [])
    return (
        <div>
            <ul>
                {listOfUSer.map(user=>(
                    <div key={user.id}>
                    <li >{user.name}</li>
                    <li >{user.email}</li>
                    <li >{user.website}</li>
                    <li >{user.phone}</li>
                    <h1>...</h1>
                    </div>
                   
                )
                )
                }
            </ul>
        </div>
    )
}

export default UserList
