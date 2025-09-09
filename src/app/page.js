'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/posts');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setPosts(data);
      setError(null);
    } catch (err) {
      console.error('Error al cargar los posts:', err);
      setError('No se pudieron cargar las publicaciones. Intenta recargar la página.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (postData) => {
    if (!postData) {
      setSelectedPost(null);
      return;
    }

    const isEdit = !!selectedPost?.id;
    const url = isEdit ? `/api/posts/${selectedPost.id}` : '/api/posts';
    const method = isEdit ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isEdit ? { ...postData, id: selectedPost.id } : postData),
      });

      if (!res.ok) throw new Error('Error al guardar');

      setSelectedPost(null);
      await fetchPosts();
    } catch (err) {
      console.error('Error al guardar el post:', err);
      alert('Error al guardar el post. Intenta de nuevo.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta publicación?')) return;
    
    try {
      const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Error al eliminar');
      await fetchPosts();
    } catch (err) {
      console.error('Error al eliminar el post:', err);
      alert('Error al eliminar el post. Intenta de nuevo.');
    }
  };

  const handleEdit = (post) => {
    setSelectedPost(post);
    // Scroll to form
    document.getElementById('post-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      
      <main className="container py-4">
        <div className="row g-4">
          <div className="col-lg-4">
            <div id="post-form">
              <PostForm 
                onSubmit={handleSubmit} 
                initialData={selectedPost || {}} 
              />
            </div>
          </div>
          
          <div className="col-lg-8">
            <div className="bg-white rounded-3 p-4 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="h5 mb-0">
                  <i className="bi bi-newspaper me-2"></i>
                  Publicaciones
                </h2>
                <span className="badge bg-primary">
                  {posts.length} {posts.length === 1 ? 'post' : 'posts'}
                </span>
              </div>
              
              {error && (
                <div className="alert alert-danger">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  {error}
                </div>
              )}
              
              {isLoading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                  <p className="mt-2 text-muted">Cargando publicaciones...</p>
                </div>
              ) : (
                <PostList 
                  posts={posts}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
