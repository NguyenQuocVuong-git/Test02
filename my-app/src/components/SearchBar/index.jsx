import React, { useState } from 'react';
import { fetchAlbums } from '../../utils/helper';

const SearchComponent = ({ data, setAlbums }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (event) => {
        const newValue = event.target.value;
        setSearchTerm(newValue);
        if (newValue === '') {
            const responsive = await fetchAlbums();
            setAlbums(responsive.slice(0, 5));
        } else {
            if (newValue.length > 0) {
                const filteredData = data.filter(item =>
                    item.title.toLowerCase().includes(newValue.toLowerCase())
                );
                setAlbums(filteredData);
            } else {
                setAlbums([]);
            }
        }
    };

    return (
        <div className="flex flex-col items-start mb-5 w-full">
            <form style={{ width : '100%'}}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input value={searchTerm} onChange={handleSearch} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Albums" required />
                </div>
            </form>
        </div>
    );
};

export default SearchComponent;
