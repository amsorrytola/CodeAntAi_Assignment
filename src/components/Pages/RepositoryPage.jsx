import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { refreshRepositories } from "../../store/repositoriesSlice.js";
import SideBar from "../SideBar.jsx";
import RepoBox from "../RepoBox";
import RepoSearchBox from "../RepoSearchBox";
import AddRepoForm from "../AddRepoForm";

function RepositoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const repositories = useSelector((state) => state.repositories.repositories);
  const dispatch = useDispatch();

  const filteredRepos = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lg:flex-1 lg:p-6  bg-[#FAFAFA] xs:bg-white h-screen xs:relative ">
      <div className=" h-[156px] xs:h-[240px] bg-white rounded-t-lg border-2 " >
        <div className="flex xs:flex-col lg:justify-between lg:items-center mb-6 xs:mt-[60px]">
          <div className="pl-[24px] lg:pt-[24px]  ">
            <h1 className="text-[24px] xs:text-[22px] font-bold">Repositories</h1>
            <p className="text-[14px] xs:text-[12px] text-gray-500">33 total repositories</p>
          </div>
          <div className="space-x-4 xs:mt-[10px] xs:ml-[20px] pr-[20px] ">
            <button
              onClick={() => dispatch(refreshRepositories())}
              className=" bg-gray-200 rounded-lg w-[127px] h-[40px]"
            >
              <div className="flex pl-[10px]">
              <img src="src/assets/SearchLogo.png" alt="" />
              <p className="pl-[5px]">Refresh All</p>
              </div>
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="p-2 bg-blue-600 text-white rounded-lg"
            >
              
              <div className="flex pl-[10px]">
              <img src="src/assets/plus.png" alt="" />
              <p className="pl-[10px]">Add Repository</p>
              </div>
            </button>
          </div>
        </div >
        <RepoSearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="">
        {filteredRepos.map((repo) => (
          <RepoBox key={repo.id} repo={repo} />
        ))}
      </div>
      {/*This is to add form */}
      {/* {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <AddRepoForm closeModal={() => setShowModal(false)} />
        </div>
      )} */}
    </div>
  );
}

export default RepositoryPage;
