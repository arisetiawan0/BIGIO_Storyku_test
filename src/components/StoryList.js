
import React, { useState } from 'react';
import FetchStory from '../services/api/apiService';
import ListTable from './ListTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import FilterModal from './FilterModal';

const StoryList = () => {
    const [stories, setStories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    const handleEdit = async (storyId) => {
        try {
            const response = await fetch(
                `https://us-central1-fullstack-api-38a4f.cloudfunctions.net/api/api/stories/${storyId}`
            );

            if (response.ok) {
                const storyData = await response.json();
                console.log('Edit story with ID:', storyId, 'Data:', storyData);
            } else {
                console.error('Failed to fetch story data');
            }
        } catch (error) {
            console.error('Error fetching story data:', error);
        }
    };

    const handleDelete = async (storyId) => {
        try {
            const response = await fetch(
                `https://us-central1-fullstack-api-38a4f.cloudfunctions.net/api/api/stories/${storyId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.ok) {
                const responseData = await response.json();

                if (responseData.success) {
                    setStories((prevStories) => prevStories.filter((story) => story.id !== storyId));
                    console.log('Deleted story with ID:', storyId);
                } else {
                    console.error('Failed to delete story:', responseData.error);
                }
            } else {
                console.error('Failed to delete story');
            }
        } catch (error) {
            console.error('Error deleting story:', error);
        }
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredStories = stories.filter(
        (story) =>
            story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            story.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleApplyFilter = (filterValues) => {
        const filteredStories = stories.filter((story) => {
            const matchesCategory = !filterValues.category || story.category === filterValues.category;
            const matchesStatus = !filterValues.status || story.status === filterValues.status;

            return matchesCategory && matchesStatus;
        });

        setStories(filteredStories);
        setIsFilterModalOpen(false);
    };

    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-10 mt-4">
                <h2 className="text-4xl font-semibold text-[#6558F5]">Story List</h2>
                <div className="flex items-center gap-6">
                    <input
                        type="text"
                        placeholder="Search by writer's name/title story"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="p-3 border border-gray-300 w-80 rounded-lg placeholder-purple-700 focus:ring-2 focus:ring-purple-500 transition duration-200"
                    />
                    <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 cursor-pointer p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-200 shadow"
                        onClick={() => setIsFilterModalOpen(true)}
                    />
                    <Link to="/story" className="flex items-center justify-center">
                        <button className="bg-[#6558F5] text-white font-semibold py-2 px-5 rounded-lg hover:bg-purple-600 transition duration-200 shadow-lg">
                            Add Story
                        </button>
                    </Link>
                </div>
            </div>
            <FetchStory setStories={setStories} />
            <ListTable stories={filteredStories} handleEdit={handleEdit} handleDelete={handleDelete} />
            <FilterModal
                isOpen={isFilterModalOpen}
                onClose={() => setIsFilterModalOpen(false)}
                onApplyFilter={handleApplyFilter}
            />
        </div>

    );
};

export default StoryList;
