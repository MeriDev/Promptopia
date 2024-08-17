'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';

const UpdatePrompt = () => {
  const router = useRouter();
  const serachParams = useSearchParams();
  const promptId = serachParams.get('id');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ post: '', tag: '' });

  useEffect(() => {
    const fetchPrompt = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    if (promptId) fetchPrompt();
  }, [promptId]);

  //modify orompt submitting
  const modiftPrompt = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!promptId) return alert('Prompt Id not found');

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push('/profile');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      isSubmitting={isSubmitting}
      handleSubmit={modiftPrompt}
    />
  );
};

export default UpdatePrompt;
