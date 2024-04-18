import React from 'react';
import dziko from '../../../assets/images/f3.png';

export default function Admin() {
    return (
        <div>
            <div>
                <section class="flex bg-gray-100 min-h-screen">
                    <aside class="hidden sm:flex sm:flex-col">
                        <a href="#" class="inline-flex items-center justify-center h-20 w-20 bg-[#007AFF] hover:bg-[#007AFF] focus:bg-[#007AFF]">
                            <img src={dziko}></img>
                        </a>
                        <div class="flex-grow flex flex-col justify-between text-gray-500 bg-[#0C172C]">
                            <nav class="flex flex-col mx-4 my-6 space-y-4">
                                <a href="#" class="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                                    <span class="sr-only">Folders</span>
                                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                    </svg>
                                </a>
                                <a href="#" class="inline-flex items-center justify-center py-3 text-[#007AFF] bg-white rounded-lg">
                                    <span class="sr-only">Dashboard</span>
                                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </a>
                            </nav>
                        </div>
                    </aside>
                    <div class="flex-grow text-gray-800 ">
                        <header class="flex items-center h-20 px-6 sm:px-10 bg-white">
                            <button class="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                                <span class="sr-only">Menu</span>
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </button>
                            <div class="relative w-full max-w-md sm:-ml-2">
                                <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" class="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                                <input type="text" role="search" placeholder="Search..." class="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg" />
                                <button class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                                    <span class="sr-only">Log out</span>
                                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </button>
                            </div>
                        </header>
                        <main class="p-6 sm:p-10 space-y-6">
                            <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                                <div class="mr-6">
                                    <h1 class="text-4xl font-semibold mb-2">Dziko Admin Portal</h1>
                                    <h2 class="text-gray-600 ml-0.5">Welcome To Your Portal</h2>
                                </div>
                                <div class="flex flex-wrap items-start justify-end -mb-3">
                                    <button class="inline-flex px-5 py-3 text-[#F67F17] hover:text-orange-700 focus:text-[#F67F17]  focus:bg-purple-100 border border-[#F67F17] rounded-md mb-3">
                                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                        Manage Events
                                    </button>
                                    <button class="inline-flex px-5 py-3 text-white bg-[#007AFF] hover:bg-blue-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Add New Event
                                    </button>
                                </div>

                                <div class="flex flex-wrap items-start justify-end -mb-3">
                                    <button class="inline-flex px-5 py-3 text-[#F67F17] hover:text-orange-700 focus:text-[#F67F17]  focus:bg-purple-100 border border-[#F67F17] rounded-md mb-3">
                                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                        Manage New items
                                    </button>
                                    <button class="inline-flex px-5 py-3 text-white bg-[#007AFF] hover:bg-blue-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Add News Item
                                    </button>
                                </div>

                                <div class="flex flex-wrap items-start justify-end -mb-3">
                                    <button class="inline-flex px-5 py-3 text-[#F67F17] hover:text-orange-700 focus:text-[#F67F17]  focus:bg-purple-100 border border-[#F67F17] rounded-md mb-3">
                                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                        Manage Projects
                                    </button>
                                    <button class="inline-flex px-5 py-3 text-white bg-[#007AFF] hover:bg-blue-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Add New Project
                                    </button>
                                </div>
                            </div>
                        </main>
                    </div>
                </section>
            </div>
        </div>
    );
}
