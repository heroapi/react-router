import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = (data) => { 
   const users = useLoaderData(); 
   console.log(users)
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold mt-3'>Total User Found : {users.length}</h1>
            {/* <marquee behavior="" direction="left">
                <p>This is my react app</p>
            </marquee> */}
            <div className="grid gap-5 grid-cols-4 mx-auto w-[80%]">
                {
                    users.map(user => <User key={user.id} user={user} />)
                }
            </div>
        </div>
    );
};

export default Users;