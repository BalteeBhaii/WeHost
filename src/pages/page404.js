import React from 'react';
import Header from '../components/Partials/header/header';
import Footer from '../components/Partials/footer/footer';
import { Link } from 'react-router-dom';
const Page404 = () => {
    return (<>
    <Header/>
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-12 col-md-8'>
                <h4 className='fw-semibold' style={{color: '#10b2d7'}}>ERROR CODE: 404</h4>
                <h1 className='fs-4 fw-bold'>We can’t seem to find the page you’re looking for</h1>
                <h2 className='mt-5 fs-5'>Helpful Links</h2>
                <ul className='p-0 '>
                    <li><Link to='/' className='text-black text-decoration-underline'>Home</Link></li>
                    <li><Link to='/' className='text-black text-decoration-underline'>Vacation Rental Management</Link></li>
                </ul>
            </div>
            <div className='col-12 col-md-4'>
                <div >

                    <img src='/images/error404.png' className='w-100'/>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    );
}

export default Page404;