import React, { useEffect, useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import image3 from '../../../assets/images/image3.jpg';
import { FaInfoCircle, FaHandsHelping, FaEnvelope, FaNewspaper, FaSearch } from 'react-icons/fa';


function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true); // State to control automatic rotation
  const [scrolling, setScrolling] = useState(false); // State to track scrolling
  const [hovered, setHovered] = useState(false);

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

  // Listen for scroll events to change navbar color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        const newIndex = (currentImage - 1 + images.length) % images.length;
        setCurrentImage(newIndex);
        setAutoRotate(false);
      } else if (event.key === 'ArrowRight') {
        const newIndex = (currentImage + 1) % images.length;
        setCurrentImage(newIndex);
        setAutoRotate(false);
      }
    };

    const handleTouchStart = (event) => {
      const startX = event.touches[0].clientX;
      const handleTouchMove = (moveEvent) => {
        const moveX = moveEvent.touches[0].clientX;
        const diff = startX - moveX;
        if (diff > 50) {
          const newIndex = (currentImage + 1) % images.length;
          setCurrentImage(newIndex);
          setAutoRotate(false);
        } else if (diff < -50) {
          const newIndex = (currentImage - 1 + images.length) % images.length;
          setCurrentImage(newIndex);
          setAutoRotate(false);
        }
      };

      const handleTouchEnd = () => {
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };

      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [currentImage, autoRotate, images.length]);

  return (
    <div>
      <Navbar />
      <div className="bg-indigo-800 py-4"></div>

      <section id="home" className="hero relative mb-20">
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
        <div className='absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full bg-black/50 text-white'>
        <div className="text-6xl font-bold flex flex-col gap-y-4 w-3/5 text-center items-center ">
          <p>Welcome to Dziko Centre for</p>
          <span className="bg-indigo-900 w-fit p-4"> Climate Justice</span>
        </div>
        </div>
      </section>

      <section id="about" className="bg-white py-40 text-center w-1/2 flex flex-col items-center gap-y-6">
        
        <div className="flex w-full gap-x-4 justify-center  items-center">
          < FaSearch className="text-4xl text-indigo-900 " />
          <h2 className="text-4xl font-bold text-indigo-800 mb-4 uppercase">Discover Who We Are</h2>
        </div>
        <p className="text-lg  text-gray-700 mb-8">
          <p>Our vision aligns closely with the Loss and Damage objectives, </p>
          <p>and we are committed to excellence and accountability in implementation.</p>
          <p>Together, we aim to improve community resilience, health, and quality of life, </p>
          <p>promoting sustainability.</p>
        </p>
        <Link to="/about" className="cta-btn bg-indigo-800 text-white py-2 px-6 rounded-full hover:bg-indigo-500 mb-8">Learn more</Link>
      </section>


      <section id="projects" className="py-20 text-center md:grid md:grid-cols-3 md:gap-4 mx-auto pt-20 pb-20">
        <div
          className="mb-8 md:mb-0 bg-indigo-100 relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
          style={{ height: "calc(11cm + 102px)", paddingTop: "20px" }} // Adjusted height and padding
        >
          <FaInfoCircle className="text-5xl text-indigo-900 absolute top-4 left-1/2 transform -translate-x-1/2" />

          <h2 className="text-3xl font-bold text-indigo-900 mb-4 mt-16">Our Projects</h2> {/* Adjusted margin-top */}
          <p className="text-lg text-gray-700 mb-8 h-40">
            Explore our initiatives and campaigns aimed at addressing pressing environmental issues such as deforestation, plastic pollution, and climate change.
          </p>
          <Link to="/projects" className="cta-btn bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-500">View Projects</Link>
        </div>

        <div
          className="mb-8 md:mb-0 bg-indigo-100 relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
          style={{ height: "calc(11cm + 102px)", paddingTop: "20px" }} // Adjusted height and padding
        >
          <FaHandsHelping className="text-5xl text-indigo-900 absolute top-4 left-1/2 transform -translate-x-1/2" />
          <h2 className="text-3xl font-bold text-indigo-900 mb-4 mt-16">Support Us</h2> {/* Adjusted margin-top */}
          <p className="text-lg text-gray-700 mb-8">
            Join us in our mission to create a sustainable future by supporting our work. Your donations help fund our projects and educational programs. Additionally, we offer exciting opportunities for volunteering. Whether you're passionate about planting trees, organizing community events, or spreading awareness, there's a place for you in our volunteer network.
          </p>
          <Link to="/donate" className="cta-btn bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-500">Get Involved</Link>
        </div>

        <div
          className="bg-indigo-100 relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
          style={{ height: "calc(11cm + 102px)", paddingTop: "20px" }} // Adjusted height and padding
        >
          <FaEnvelope className="text-5xl text-indigo-900 absolute top-4 left-1/2 transform -translate-x-1/2" />
          <h2 className="text-3xl font-bold text-indigo-900 mb-4 mt-16">Contact Us</h2> {/* Adjusted margin-top */}
          <p className="text-lg text-gray-700 mb-8">
            Have questions or want to collaborate? Reach out to us and let's work together to make a positive impact on the environment.
          </p>
          <Link to="/contact" className="cta-btn bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-500">Get in Touch</Link>
        </div>
      </section>

      <section id="news" className="bg-white-100 py-20 text-center w-1/2 mx-auto">
        <FaNewspaper className="text-5xl text-indigo-900 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">News and Events</h2>
        <p className="text-lg text-gray-700 mb-8">
          Stay Updated with Our Latest Initiatives and Environmental Campaigns.
          <p className="font-bold text-indigo-900 mb-2 mt-2">What You'll Find Here ...</p>
          <p className="font-bold text-indigo-500 mb-2 mt-2">Exciting Initiatives:</p>
          <p>Dive into the heart of our initiatives as we tackle pressing environmental issues head-on. </p>
          <p>From reforestation projects to community clean-up campaigns,</p>
          <p>discover how we're making a difference on both local and global scales.</p>
          <p className="font-bold text-indigo-500 mb-2 mt-2">Upcoming Events:</p>
          Stay informed about upcoming events, workshops, and webinars focused on environmental education,
          <p>conservation, and activism. Join us in our efforts to raise awareness and mobilize action for a healthier planet.</p>
        </p>
        <Link to="/news" className="cta-btn bg-indigo-800 text-white py-2 px-6 rounded-full hover:bg-indigo-500">Latest News</Link>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
