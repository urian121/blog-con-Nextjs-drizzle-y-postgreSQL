'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

export default function Home() {
  const [posts, setPosts] = useState([]); // Estado para almacenar los posts
  // Estados para el formulario de posts
  const [selectedPost, setSelectedPost] = useState(null); // Estado para el post seleccionado
  const [author, setAuthor] = useState('');

  // useEffect para cargar los posts al montar el componente
  useEffect(() => {
    fetchPosts();
  }, []);

  // Función para obtener los posts
  const fetchPosts = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    setPosts(data);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (postData) => {
    const url = selectedPost ? `/api/posts/${selectedPost.id}` : '/api/posts';
    const method = selectedPost ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        throw new Error('Error al guardar el post');
      }

      // Limpiar el estado del post seleccionado
      setSelectedPost(null);
      
      // Actualizar la lista de posts
      fetchPosts();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Función para eliminar un post
  const handleDelete = async (id) => {
    await fetch('/api/posts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchPosts();
  };

  // Función para editar un post
  const handleEdit = (post) => {
    setSelectedPost(post);
    setAuthor(post.author);
    setTitle(post.title);
    setContent(post.content);
  };



  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4">        
        <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-5">
              <PostForm 
                onSubmit={handleSubmit} 
                initialData={selectedPost || {}} 
              />
            </div>

            <div className="col-12 col-lg-7">
              <PostList 
                posts={posts}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div >
        </div>
      </div>
    </>
  );
}
