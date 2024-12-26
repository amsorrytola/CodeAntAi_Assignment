import store from "./store/store.js";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/Pages/App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Pages/Login.jsx";
import RepositoryPage from "./components/Pages/RepositoryPage.jsx";
import CodeReview from "./components/Pages/CodeReview.jsx";
import CloudSecurity from "./components/Pages/CloudSecurity.jsx";
import Use from "./components/Pages/Use.jsx";
import Settings from "./components/Pages/Settings.jsx";
import Support from "./components/Pages/Support.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<App />}>
          <Route path="repositories" element={<RepositoryPage />} />
          <Route path="ai-code-review" element={<CodeReview />} />
          <Route path="cloud-security" element={<CloudSecurity />} />
          <Route path="how-to-use" element={<Use />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
