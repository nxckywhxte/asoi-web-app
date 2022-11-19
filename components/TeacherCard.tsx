import React from 'react';
import {TeacherDataProps} from "../data/TeacherData";

const TeacherCard = ({id,fullName,position,imgUrl}: TeacherDataProps) => {
    return (
        <div key={id} className='p-2 lg:w-1/3 md:w-1/2 w-full'>
            <div className='h-full flex items-center border-gray-800 border p-4 rounded-lg'>
                <img
                    alt='team'
                    className='w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                    src={imgUrl}
                />
                <div className='flex-grow'>
                    <h2 className='title-font font-medium'>
                        {fullName}
                    </h2>
                    <p className='text-gray-500'>
                        {position}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;