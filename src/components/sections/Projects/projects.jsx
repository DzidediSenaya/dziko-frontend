import React, { useState, useEffect } from 'react';
import './projects.css';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import attentionGrabberImage1 from '../../../assets/images/ecologo.jpg';
import attentionGrabberImage2 from '../../../assets/images/ecologo2.jpg';


const Projects = () => {
    const [showHomeImage1, setShowHomeImage1] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowHomeImage1((prevShowHomeImage1) => !prevShowHomeImage1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="bg-blue-700 py-4"></div>
            <section id="home" className="py-8 lg:w-3/5 mx-auto sm:w-60 px-6"> {/* Set width to 90% on small screens */}
                <img src={showHomeImage1 ? attentionGrabberImage1 : attentionGrabberImage2} alt="Home Image" />
            </section>
            <section className="max-w-3xl mx-auto py-4 sm:max-w-50 mx-5 px-0"> {/* Set width to 90% on small screens */}
                <h2 className="text-3xl font-bold mb-6 sm:max-w-50 mx-5 px-04">Our Projects</h2>
                <p className="mb-6 sm:max-w-50 mx-5 px-0">One of our flagship projects is the Young Eco Warriors Project, which aims to educate students about climate change and empower them to take action in their communities. Through this project, we partner with schools and organizations to deliver workshops, training sessions, and hands-on activities that inspire young people to become advocates for the planet.</p>
                <h5 className="text-3xl font-bold mb-6 sm:max-w-50 mx-5 px-04">Project Gallery</h5>  
            </section>
            <Footer />
            <div className="bg-blue-900 py-4"></div>
        </div>
    );
};

export default Projects;
