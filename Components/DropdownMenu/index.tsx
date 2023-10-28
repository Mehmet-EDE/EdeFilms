"use client"
import React, { useState } from 'react';
interface DropdownMenuProps {
    categories: {
        id: number;
        name: string;
    }[];
}
function DropdownMenu({ categories }: DropdownMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='flex items-center p-4 justify-center bg-opacity-75 bg-black border border-gray-700 shadow-md rounded-md font-semibold hover:z-9 hover:scale-90 transition-transform duration-300'
            >
                More Categories
            </button>
            {isOpen && (
                <div className='absolute z-10 mt-2 py-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md'>
                    {categories.map((cat) => (
                        <div>
                            <a key={cat.id} href={`/${cat.id}`} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>{cat.name}</a>
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default DropdownMenu