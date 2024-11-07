import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useGlobalContext } from './GlobalContext';


const Details = () => {
  const { id } = useParams();
  // const [post, setPost] = useState(null);   // OLD CODE
  const { data: posts } = useGlobalContext();   // NEW CODE
  const [comments, setComments] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);

  // NEW CODE
  const post = posts.find(
    post => post.id === parseInt(id)

  );

    // OLD CODE
  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then(response => setPost(response.data))
  //     .catch(error => console.error(error))
  //     .finally(() => setLoadingPost(false));
  // }, [id]);


    // NEW CODE
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingComments(false);
      }
    };

    fetchComments();
  }, [id]);



  return (
    <div className="p-6">
      {post ? (
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <p className="mb-6">{post.body}</p>
        </div>
      ) : (
        <p>Loading post...</p>
      )}


      <h2 className="text-xl font-bold mb-4 uppercase underline">Comments</h2>
      {loadingComments ? (
        <p>Loading comments...</p>
      ) : (
        comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map(comment => (
              <li key={comment.id} className="p-4 border border-pink-300 rounded shadow-lg">
                <p className="font-semibold">{comment.name}</p>
                <p className="text-sm text-gray-500">{comment.email}</p>
                <p className="mt-2">{comment.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments found for this post</p>
        )
      )}
    </div>
  );
};

export default Details;
