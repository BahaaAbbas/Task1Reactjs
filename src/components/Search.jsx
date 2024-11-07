import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdClear } from "react-icons/md";
import { useGlobalContext } from './GlobalContext';


const Search = () => {

  // const [posts, setPosts] = useState([]);   // OLD CODE
  const [search, setSearch] = useState('');
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const { data: posts } = useGlobalContext();  // NEW CODE

   // OLD CODE
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => setPosts(response.data))
  //     .catch(error => console.error(error));
  // }, []);



  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <div className="p-6">
      <div className="relative">
        <input
          ref={textRef}
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded pr-10"
        />
        {
          search && (<MdClear
            className='absolute right-3 top-4 text-gray-500 cursor-pointer hover:bg-red-200 hover:scale-150 hover:rounded-full hover:transition-all'
            onClick={() => setSearch('')}
          />
          )}

      </div>

      {filteredPosts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        <ul>
          {filteredPosts.map(post => (
            <li key={post.id} className="mb-2">
              <Link
                to={`/details/${post.id}`}
                className="text-blue-500 underline"
              >
                {post.id} - {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search