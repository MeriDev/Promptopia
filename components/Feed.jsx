'use client';

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map(post => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchPost, setSearchPost] = useState([]);
  const [posts, setPosts] = useState([]);

  const handleSearchChange = e => {
    setSearchPost(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <section className="feed">
        <form className="relative w-full flex-center">
          <input
            type="text"
            placeholder="Search tag or username"
            value={searchPost}
            onChange={handleSearchChange}
            className="search_input peer"
            required
          />
        </form>

        <PromptCardList data={posts} handleTagClick={() => {}} />
      </section>
    </div>
  );
};

export default Feed;
