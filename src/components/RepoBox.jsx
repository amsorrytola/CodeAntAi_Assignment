import React from 'react';

function RepoBox({ repo }) {
  return (
    <div className="p-4 border-b lg:border-r lg:border-l border-gray-200 flex justify-between items-center bg-white xs:ml-[10px]">
      <div className='flex flex-col'>
        <div className='flex'>
        <p className="text-xl font-semibold">{repo.name}</p>
        <p className='ml-[15px] bg-blue-100 text-blue-600 border-2 border-blue-200 rounded-3xl  px-3'>{repo.privacy}</p>
        </div>
        <div className='flex justify-between space-x-6 mt-1'>
        <div className='flex justify-center items-center'>
        <p className="text-md text-gray-500">{repo.language}  </p>
        <p className='text-[30px] text-blue-600 pl-[3px]'>•</p>
        </div>
        <div className='flex justify-center items-center'>
          <img src="src/assets/database.png" alt="" />
        <p className="text-md text-gray-500 pl-[2px]">{repo.size} KB </p>
        </div>
        <div className='flex justify-center items-center'>
          
        <p className="text-md text-gray-500">Updated {repo.updated} KB </p>
        </div>
        
      
        </div>
      </div>
    </div>
  );
}

export default RepoBox;
