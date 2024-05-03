import React, { useState } from 'react';
import axios from 'axios';

const AddProjectForm = ({ onProjectAdded }) => {
    const [newProjectData, setNewProjectData] = useState({
        projectName: '',
        location: '',
        date: '',
        description: '',
        skills: '',
        gallery: []
    });
    const [message, setMessage] = useState(null); // State for success or error message

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProjectData({ ...newProjectData, [name]: value });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setNewProjectData({ ...newProjectData, gallery: files });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(newProjectData).forEach(([key, value]) => {
            if (key === 'gallery') {
                value.forEach((image, index) => {
                    formData.append(`gallery[${index}]`, image);
                });
            } else {
                formData.append(key, value);
            }
        });

        try {
            const response = await axios.post('http://localhost:9000/api/projects', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            onProjectAdded(response.data); // Notify parent component that a new project has been added
            setNewProjectData({
                projectName: '',
                location: '',
                date: '',
                description: '',
                skills: '',
                gallery: []
            });
            setMessage({ type: 'success', content: 'Project added successfully' });
        } catch (error) {
            console.error('Error creating project:', error);
            setMessage({ type: 'error', content: 'Error adding project. Please try again.' });
        }

        // Automatically hide the message after 2 seconds
        setTimeout(() => {
            setMessage(null);
        }, 2000);
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
            {message && (
                <div
                    className={`p-2 mb-4 text-white ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                >
                    {message.content}
                </div>
            )}
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectName">Project Name</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="projectName"
                        type="text"
                        name="projectName"
                        placeholder="Project Name"
                        value={newProjectData.projectName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">Location</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={newProjectData.location}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="date"
                        type="text"
                        name="date"
                        placeholder="Date"
                        value={newProjectData.date}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                    <textarea
                        className="resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={newProjectData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">Skills</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="skills"
                        type="text"
                        name="skills"
                        placeholder="Skills"
                        value={newProjectData.skills}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gallery">Gallery</label>
                    <input
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="gallery"
                        type="file"
                        name="gallery"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Create Project</button>
            </form>
        </div>
    );
};

export default AddProjectForm;

