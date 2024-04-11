import React from 'react';
import profile from '../../../../images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center m-4 p-4 border-b-2'>
            <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;