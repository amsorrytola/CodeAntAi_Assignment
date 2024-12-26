import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  repositories: [
    { id: 1, name: "design-system", language: "React", size: 7320, privacy: "Public", updated: "1 day ago" },
    { id: 2, name: "codeant-ci-app", language: "Javascript", size: 5871, privacy: "Private", updated: "2 days ago" },
    { id: 3, name: "analytics-dashboard", language: "Python", size: 4521, privacy: "Private", updated: "5 days ago" },
    { id: 4, name: "mobile-app", language: "Swift", size: 3096, privacy: "Public", updated: "3 days ago" },
    { id: 5, name: "e-commerce-platform", language: "Java", size: 6210, privacy: "Private", updated: "6 days ago" },
    { id: 6, name: "blog-website", language: "HTML/CSS", size: 1876, privacy: "Public", updated: "4 days ago" },
    { id: 7, name: "social-network", language: "PHP", size: 5432, privacy: "Private", updated: "7 days ago" },
  ],
};

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    addRepository: (state, action) => {
      state.repositories.push(action.payload);
    },
    refreshRepositories: (state) => {
      // Reset repository list (simulate refresh by reloading initial data).
      state.repositories = [...initialState.repositories];
    },
  },
});

export const { addRepository, refreshRepositories } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
