import React, { useState, useEffect } from 'react';


export default function FetchAPI() {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setUsers(json)
        }
        )
    },[])
    return (
      <div>
          {users.map(user=><div key={user.id}> Nama : {user.name} <br/> Email: {user.email} </div>
          )}
         
      </div>
    )
    }
