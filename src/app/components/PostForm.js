'use client';

import { useState } from 'react';

export default function PostForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [author, setAuthor] = useState(initialData.author || '');
  const [content, setContent] = useState(initialData.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, content });
    // Si es un nuevo post, limpiamos el formulario
    if (!initialData.id) {
      setTitle('');
      setAuthor('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mb-4">
      <h2 className="h4 mb-4">{initialData.id ? 'Editar' : 'Crear nuevo'} Post</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Título</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">Autor</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">Contenido</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-control"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className={`btn btn-${initialData.id ? 'warning' : 'primary'}`}
      >
        <i className={`bi bi-${initialData.id ? 'pencil' : 'plus'}-square me-2`}></i>
        {initialData.id ? 'Actualizar' : 'Crear'} Post
      </button>
    </form>
  );
}
