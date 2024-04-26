import React, { useState } from 'react';
import dziko from '../../../assets/images/f3.png';
import AddProjectForm from './addproject'; 
import { Link } from 'react-router-dom';

export default function Admin() {
    const [showAddProjectForm, setShowAddProjectForm] = useState(false);

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 h-screen">
                <div className="flex items-center justify-center h-20">
                    <img src={dziko} alt="Dziko Logo" className="h-12 w-12" />
                </div>
                <nav className="mt-6">
                    <ul>
                        <li className="py-2 px-4">
                            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</a>
                        </li>
                        <li className="py-2 px-4">
                            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white">Events</a>
                        </li>
                        <li className="py-2 px-4">
                            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white">News</a>
                        </li>
                        <li className="py-2 px-4">
                            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-grow bg-gray-100">
                {/* Header */}
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Dziko Admin Portal</h1>
                    </div>
                </header>

                {/* Main content */}
                <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        {/* Add New Project Button */}
                        <div className="mb-4">
                            <button onClick={() => setShowAddProjectForm(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Add New Project
                            </button>
                        </div>

                        {/* Render AddProjectForm if showAddProjectForm is true */}
                        {showAddProjectForm && <AddProjectForm onProjectAdded={() => setShowAddProjectForm(false)} />}

                        <Link to="/allprojects"> {/* Add a Link to the projects page */}
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Manage Projects
                            </button>
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}
