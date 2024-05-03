import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = ({ onProjectDeleted }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch projects from the backend when the component mounts
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:9000/api/projects');
                setProjects(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProjects();
    }, [onProjectDeleted]); // Refresh project list when a project is deleted

    const handleDeleteProject = async (projectId) => {
        try {
            await axios.delete(`http://localhost:9000/api/projects/${projectId}`);
            // Update project list after deletion
            setProjects(projects.filter(project => project._id !== projectId));
            onProjectDeleted(); // Notify parent component that a project has been deleted
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Project List</h2>
            {projects.length === 0 ? (
                <div>No projects found.</div>
            ) : (
                <ul>
                    {projects.map(project => (
                        <li key={project._id}>
                            <div>{project.projectName}</div>
                            <div>{project.location}</div>
                            <div>{project.date}</div>
                            <div>{project.description}</div>
                            <div>{project.skills}</div>
                            <button onClick={() => handleDeleteProject(project._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProjectList;
