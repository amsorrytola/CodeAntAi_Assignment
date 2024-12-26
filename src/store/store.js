import { configureStore } from '@reduxjs/toolkit';
import repositoriesReducer from './repositoriesSlice'; // Adjust the path if needed

const store = configureStore({
  reducer: {
    repositories: repositoriesReducer, // Add the repositories slice to the store
  },
});

export default store;
