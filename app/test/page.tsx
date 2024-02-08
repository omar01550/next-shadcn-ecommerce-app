import React from 'react'
import User from './user';
import Client from './client';

const TestPage = async () => {
 const res =await fetch('https://jsonplaceholder.typicode.com/users') ;

 const users = await res.json();
 

return(
     <div>
          <Client/>
         {users.map((user) => {
            return(
                 <>
                  <User id={user.id} name={user.name}/>
                 </>
            )
         })}
     </div>
)
  
}

export default TestPage
