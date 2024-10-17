import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);

 
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error))
      .finally(() => setLoadingPost(false));
  }, [id]);


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(response => setComments(response.data))
      .catch(error => console.error(error))
      .finally(() => setLoadingComments(false));
  }, [id]);

  return (
    <div className="p-6">
      {loadingPost ? (
        <p>Loading post...</p>
      ) : (
        post && (
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="mb-6">{post.body}</p>
          </div>
        )
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
