import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const StoryTable = ({ stories, handleEdit, handleDelete }) => {
    const dummyRows = Array.from({ length: 10 }, (_, rowIndex) => ({
        id: `dummy-${rowIndex}`,
        index: rowIndex,
    }));

    return (
        <div className="overflow-x-auto mr-12">
            <table className="w-full bg-white border-collapse border border-slate-500">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border border-slate-600 bg-gray-200">Title</th>
                        <th className="py-2 px-4 border border-slate-600 bg-gray-200">Writes</th>
                        <th className="py-2 px-4 border border-slate-600 bg-gray-200">Category</th>
                        <th className="py-2 px-4 border border-slate-600 bg-gray-200">Tags</th>
                        <th className="py-2 px-4 border border-slate-600 bg-gray-200">Status</th>
                        <th className="py-2 px-4 border border-slate-600 bg-gray-200">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyRows.map((dummyRow) => {
                        const story = stories[dummyRow.index] || {};
                        return (
                            <tr key={dummyRow.id}>
                                <td className="py-4 px-4 border border-slate-600 text-center">
                                    {story.title || ''}
                                </td>
                                <td className="py-4 px-4 border border-slate-600 text-center">
                                    {story.author || ''}
                                </td>
                                <td className="py-4 px-4 border border-slate-600 text-center">
                                    {story.category || ''}
                                </td>
                                <td className="py-4 px-4 border border-slate-600 text-center">
                                    {story.tags
                                        ? story.tags.map((tag) => (
                                              <span
                                                  key={tag}
                                                  className="inline-block bg-[#788896] text-white rounded-full px-2 py-1 mr-1 mb-1"
                                              >
                                                  {tag}
                                              </span>
                                          ))
                                        : ''}
                                </td>
                                <td className="py-4 px-4 border border-slate-600 text-center">
                                    {story.status ? (
                                        <span className="inline-block bg-[#788896] text-white rounded-full px-2 py-1">
                                            {story.status}
                                        </span>
                                    ) : null}
                                </td>
                                <td className="py-4 px-4 border border-slate-600 text-center">
                                    {story.id ? (
                                        <>
                                            <Link to={`/editstory/${story.id}`}>
                                                <button className="mr-2 text-blue-500 hover:text-blue-700">
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </button>
                                            </Link>
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => handleDelete(story.id)}
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </>
                                    ) : null}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default StoryTable;
