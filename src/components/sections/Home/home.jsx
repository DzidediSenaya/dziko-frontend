import React, { useEffect, useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import image3 from '../../../assets/images/image3.jpg';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../../src/theme.js';

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true); // State to control automatic rotation

  useEffect(() => {
    // Function to change image automatically
    const changeImageAutomatically = () => {
      if (autoRotate) {
        setCurrentImage(prevImage => (prevImage + 1) % 3);
      }
    };

    // Start automatic rotation
    const interval = setInterval(changeImageAutomatically, 3000);

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, [autoRotate]); // Depend on autoRotate state

  const images = [image1, image2, image3];

  const changeImage = (index) => {
    setCurrentImage(index);
    setAutoRotate(false); // Stop automatic rotation when user clicks on a dot
  };

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Navbar />
      <div className="bg-blue-700 py-4"></div>

      <section id="home" className="hero">
        <div className="carousel">
          {images.map((image, index) => (
            <div key={index} className={`slide ${currentImage === index ? 'active' : ''}`}>
              <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
              <div className="text-overlay"></div>
            </div>
          ))}
        </div>
        <div className="dot-container">
          {images.map((_, index) => (
            <span key={index} className={`dot ${currentImage === index ? 'active' : ''}`} onClick={() => changeImage(index)}></span>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white py-20 text-center w-1/2 mx-auto">
    <div class="text-3xl text-blue-900 font-bold italic mt-10 mb-10">
    Welcome to Dziko Centre for Climate Justice
    </div>

        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our vision aligns closely with the Loss and Damage objectives, and we are committed to excellence and accountability in implementation. Together, we aim to improve community resilience, health, and quality of life, promoting sustainability.
        </p>
        <Link to="/about" className="cta-btn bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">Learn more</Link>
      </section>

      <section id="projects" className="bg-white-100 py-20 text-center w-1/2 mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Projects</h2>
        <p className="text-lg text-gray-700 mb-8">
          Explore our initiatives and campaigns aimed at addressing pressing environmental issues such as deforestation,
          plastic pollution, and climate change.
        </p>
        <Link to="/projects" className="cta-btn bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">View Projects</Link>
      </section>

      <section id="projects" className="bg-white-100 py-20 text-center w-1/2 mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">News and Events</h2>
        <p className="text-lg text-gray-700 mb-8">
          Stay Updated with Our Latest Initiatives and Environmental Campaigns.
          <p className="font-bold text-blue-900 mb-2 mt-2">What You'll Find Here ...</p>
          <p className="font-bold text-blue-500 mb-2 mt-2">Exciting Initiatives:</p> Dive into the heart of our initiatives as we tackle pressing environmental issues head-on. From reforestation projects to community clean-up campaigns, discover how we're making a difference on both local and global scales.

          <p className="font-bold text-blue-500 mb-2 mt-2">Upcoming Events:</p>
          Stay informed about upcoming events, workshops, and webinars focused on environmental education, conservation, and activism. Join us in our efforts to raise awareness and mobilize action for a healthier planet.
        </p>
        <Link to="/projects" className="cta-btn bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">Latest News</Link>
      </section>

      <section id="support" className="bg-white py-20 text-center w-1/2 mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Support Us</h2>
        <p className="text-lg text-gray-700 mb-8">
          Join us in our mission to create a sustainable future by supporting our work. Your donations help fund our projects and educational programs. Additionally, we offer exciting opportunities for volunteering. Whether you're passionate about planting trees, organizing community events, or spreading awareness, there's a place for you in our volunteer network.
        </p>
        <Link to="/donate" className="cta-btn bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">Get Involved</Link>
      </section>

      <section id="contact" className="bg-white-100 py-20 text-center w-1/2 mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-8">
          Have questions or want to collaborate? Reach out to us and let's work together to make a positive impact on
          the environment.
        </p>
        <Link to="/contact" className="cta-btn bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">Get in Touch</Link>
      </section>

      <Footer />
      <div className="bg-blue-900 py-4"></div>
    </div>
    </ThemeProvider>
  );
}

export default Home;
