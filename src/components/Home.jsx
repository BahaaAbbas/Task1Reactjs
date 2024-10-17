import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (

    <div className="text-center mt-10">

      <h1 className="text-4xl font-bold mb-4">ReactJS - Task1 - Web Application Project</h1>
      <p className="mb-6">Navigate to search page from button below or nav link above.</p>
      <Link to="/search" className="px-4 py-2 bg-blue-500 text-white  rounded-lg hover:bg-gray-300 hover:text-blue-500 hover:transition-all hover:font-semibold">
        Search
      </Link>
    </div>

  );
}

export default Home