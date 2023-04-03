import React from 'react';

const User = (props) => {
    console.log(props.user) 
    const {name , username , email} = props.user ; 
    return (
        <div className='border px-4 py-3 text-center' >
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p>Username : {username}</p>
            <p>Email : {email}</p>
            
        </div>
    );
};

export default User;