import React from 'react';

const Header = ({children}) => {
    return (
        <div>
            <div className='bg-primary text-white mb-4 px-3'>
                {children}
            </div>
        </div>
    );
};

export default Header;