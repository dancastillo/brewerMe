import React from 'react';

export default function Navbar() {
    return (
        <div
            className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-dark border-bottom shadow-sm'>
            <h5 className='my-0 mr-md-auto font-weight-normal text-white'>BrewerMe</h5>
            {/*<nav className='my-2 my-md-0 mr-md-3'>*/}
            {/*    <a className='p-2 text-dark' href='#'></a>*/}
            {/*</nav>*/}
            <a className='btn btn-primary mr-3' href='#'>Sign up</a>
            <a className='btn btn-outline-light' href='#'>Create an Account</a>
        </div>
    );
}
