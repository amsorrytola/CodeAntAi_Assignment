import React from 'react';

function RepoSearchBox({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative w-full mb-4 px-[20px]  ">
      {/* Input with background image */}
      <input
        type="text"
        placeholder="Search Repositories"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 p-2 h-10 border rounded-lg bg-[url('https://cdn-icons-png.flaticon.com/512/622/622669.png')] bg-no-repeat bg-left  bg-[length:16px_16px] placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

export default RepoSearchBox;
