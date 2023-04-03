import React from 'react';
import NavBar from '../../NavBar/NavBar';

const Error = () => {
    return (
        <div>
            <NavBar />
            <div className="flex justify-center items-center">

                <h1 className='text-4xl align-middle'>Opps : The page you looking for that is not define or under development </h1>
            </div>
        </div>
    );
};

export default Error;