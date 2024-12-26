import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRepository } from '../store/repositoriesSlice';

function AddRepoForm({ closeModal }) {
  const [form, setForm] = useState({ name: '', language: '', size: '', privacy: 'Public' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRepo = { ...form, id: Date.now(), updated: 'Just now' };
    dispatch(addRepository(newRepo));
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Add Repository</h2>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full p-2 border rounded-lg mb-4"
      />
      <input
        type="text"
        placeholder="Language"
        value={form.language}
        onChange={(e) => setForm({ ...form, language: e.target.value })}
        className="w-full p-2 border rounded-lg mb-4"
      />
      <input
        type="number"
        placeholder="Size (KB)"
        value={form.size}
        onChange={(e) => setForm({ ...form, size: e.target.value })}
        className="w-full p-2 border rounded-lg mb-4"
      />
      <select
        value={form.privacy}
        onChange={(e) => setForm({ ...form, privacy: e.target.value })}
        className="w-full p-2 border rounded-lg mb-4"
      >
        <option value="Public">Public</option>
        <option value="Private">Private</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg w-full">Add</button>
    </form>
  );
}

export default AddRepoForm;
