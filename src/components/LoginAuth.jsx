import React, { useState } from "react";
import ButtonList from "./ButtonList";
import { useNavigate } from "react-router-dom";

function LoginAuth() {
  const [activeTab, setActiveTab] = useState("SAAS");
  const navigate = useNavigate();

  // Button configurations for both tabs
  const saasButtons = [
    {
      label: "Sign in with Github",
      icon: "src/assets/SignInIcons/GithubIcon.png",
      onClick: () => navigate('/repositories'),
    },
    {
      label: "Sign in with Bitbucket",
      icon: "src/assets/SignInIcons/BitbucketIcon.png",
      onClick: () => navigate('/repositories'),
    },
    {
      label: "Sign in with Azure DevOps",
      icon: "src/assets/SignInIcons/AzureDevopsIcon.png",
      onClick: () => navigate('/repositories'),
    },
    {
      label: "Sign in with GitLab",
      icon: "src/assets/SignInIcons/GitLabIcon.png",
      onClick: () => navigate('/repositories'),
    },
  ];

  const selfHostedButtons = [
    {
      label: "Self Hosted GitLab",
      icon: "src/assets/SignInIcons/GitLabIcon.png",
      onClick: () => navigate('/repositories'),
    },
    {
      label: "Sign in with SSO",
      icon: "src/assets/SignInIcons/SSOIcon.png",
      onClick: () => navigate('/repositories'),
    },
  ];

  return (
    <div className="inset-0 flex flex-col justify-center items-center w-[100%] h-[100%]">
      {/*w-672/720 h-602/960 276*/}
      <div className="w-[93.33%] h-[28.75%]  border border-gray-200 rounded-t-2xl bg-white flex flex-col items-center">
        {/*w-624 h-124*/}
        <div className=" mt-[5%] flex flex-col justify-center items-center w-[92.8%] h-[45%]">
          <div className="flex justify-center items-center w-[100%] h-[32.25%] ">
            {/*w-35.62 h-40*/}
            <img
              src="src/assets/Antlogo2.png"
              alt="CodeAnt Logo"
              className="w-[5.7%] h-[100%]"
            />
            <p className="pl-[2.24%] text-[190%] xs:text-[30px] font-sans">CodeAnt AI</p>
          </div>
          <p className="mt-[3%] text-[250%] xs:text-[24px] font-semibold text-center ">
            Welcome to CodeAnt AI
          </p>
        </div>
        {/*w-624 h-60*/}
        <div className="flex justify-center w-[93.33%] h-[21%]  mt-[2%]">
          <button
            className={`w-1/2 text-[150%] xs:text-[20px] font-semibold rounded-lg ${
              activeTab === "SAAS"
                ? "text-white bg-blue-600"
                : "text-gray-500 bg-[#FAFAFA]"
            }`}
            onClick={() => setActiveTab("SAAS")}
          >
            SAAS
          </button>
          <button
            className={`w-1/2 text-[150%] xs:text-[20px] font-semibold rounded-lg ${
              activeTab === "Self Hosted"
                ? "text-white bg-blue-600"
                : "text-gray-500 bg-[#FAFAFA]"
            }`}
            onClick={() => setActiveTab("Self Hosted")}
          >
            Self Hosted
          </button>
        </div>
      </div>

      {/*w-672/720 h-602/960 326*/}
      <div className="w-[93.33%] h-[33.9%]  border border-gray-200 rounded-b-2xl bg-white flex flex-col items-center">
        <ButtonList
          buttons={activeTab === "SAAS" ? saasButtons : selfHostedButtons}
        />
      </div>
      <p className="pt-[3%] text-center text-gray-500 text-[110%] xs:text-[14px] ">
        By signing up you agree to the{" "}
        <a href="/privacy-policy" className="text-blue-600 underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}

export default LoginAuth;
