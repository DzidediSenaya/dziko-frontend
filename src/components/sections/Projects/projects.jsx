import React, { useState, useEffect } from 'react';
import './projects.css';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import axios from 'axios';
import attentionGrabberImage1 from '../../../assets/images/ecologo.jpg';
import attentionGrabberImage2 from '../../../assets/images/ecologo2.jpg';

const Projects = () => {
    const [showHomeImage1, setShowHomeImage1] = useState(true);
    const [projects, setProjects] = useState([]);
    const [newProjectData, setNewProjectData] = useState({
        projectName: '',
        location: '',
        date: '',
        description: '',
        gallery: ''
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setShowHomeImage1((prevShowHomeImage1) => !prevShowHomeImage1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = () => {
        axios.get('/api/projects')
            .then(response => {
                setProjects(response.data.projects);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    };

    const createProject = () => {
        axios.post('/api/projects', newProjectData)
            .then(response => {
                fetchProjects();
                setNewProjectData({
                    projectName: '',
                    location: '',
                    date: '',
                    description: '',
                    gallery: ''
                });
            })
            .catch(error => {
                console.error('Error creating project:', error);
            });
    };

    const deleteProject = (projectId) => {
        axios.delete(`/api/projects/${projectId}`)
            .then(response => {
                fetchProjects();
            })
            .catch(error => {
                console.error('Error deleting project:', error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="bg-indigo-900 py-4"></div>
            <section id="pro" className="py-8 lg:w-3/5 mx-auto sm:w-60 px-6"> {/* Set width to 90% on small screens */}
                <img src={showHomeImage1 ? attentionGrabberImage1 : attentionGrabberImage2} alt="Home Image" />
            </section>
            <section className="max-w-3xl mx-auto py-4 sm:max-w-50 mx-5 px-0"> {/* Set width to 90% on small screens */}
                <h2 className="text-3xl font-bold mb-6 sm:max-w-50 mx-5 px-04 text-indigo-900">Our Projects</h2>
                <p className="mb-6 sm:max-w-50 mx-5 px-0">One of our flagship projects is the Young Eco Warriors Project, which aims to educate students about climate change and empower them to take action in their communities. Through this project, we partner with schools and organizations to deliver workshops, training sessions, and hands-on activities that inspire young people to become advocates for the planet.</p>
                <h5 className="text-3xl font-bold mb-6 sm:max-w-50 mx-5 px-04 text-indigo-900">Project Gallery</h5>
                <ProjectGallery projects={projects} deleteProject={deleteProject} />
            </section>
            <Footer />
        </div>
    );
};

const ProjectGallery = ({ projects, deleteProject }) => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const nextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <div className="py-8 lg:w-3/5 mx-auto"> {/* Set width to 90% on small screens */}
            <div className="gallery-container relative mb-12">
                <div />
                <div className="w-4/5 lg:w-full mx-auto flex items-center justify-between"> {/* Set width to 80% on larger screens */}
                    <button style={{ margin: "0" }} className="gallery-btn prev sm:ml-0" onClick={prevProject}>&#10094;</button>
                    <img className="gallery-img" src={projects[currentProjectIndex]?.gallery} alt={`Project ${currentProjectIndex + 1}`} />
                    <button style={{ margin: "0" }} className="gallery-btn next sm:mr-0" onClick={nextProject}>&#10095;</button>
                </div>
                <div>
                    <button onClick={() => deleteProject(projects[currentProjectIndex]._id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
