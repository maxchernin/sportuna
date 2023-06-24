import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/navigation/NavBar';
import '../css/color.css'

// We can import other components or sub-components here if needed.

function HomePage() {
    return (
        <div className='kode_wrapper'>
            <div className='kode_header_2'>
            <TopBar />
            <NavBar/>     
            </div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
            {/* Here you can add more elements or components as per your needs. */}
        </div>
    );
}

export default HomePage;
