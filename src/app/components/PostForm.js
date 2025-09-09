'use client';

import { useForm } from 'react-hook-form';

export default function PostForm({ onSubmit, initialData = {} }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: initialData.title || '',
      author: initialData.author || '',
      content: initialData.content || ''
    }
  });

  const onSubmitForm = (data) => {
    onSubmit(data);
    if (!initialData.id) {
      reset();
    }
  };

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title mb-4">
          <i className="bi bi-pencil-square me-2"></i>
          {initialData.id ? 'Editar' : 'Nuevo'} Post
        </h5>
        
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label small text-muted mb-1">Título</label>
            <input
              type="text"
              id="title"
              {...register('title')}
              className="form-control form-control-sm"
              placeholder="Ingresa el título"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="author" className="form-label small text-muted mb-1">Autor</label>
            <input
              type="text"
              id="author"
              {...register('author')}
              className="form-control form-control-sm"
              placeholder="Nombre del autor"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="content" className="form-label small text-muted mb-1">Contenido</label>
            <textarea
              id="content"
              {...register('content')}
              className="form-control form-control-sm"
              rows="4"
              placeholder="Escribe el contenido del post..."
            ></textarea>
          </div>
          
          <div className="d-flex justify-content-end gap-2">
            <button 
              type="submit" 
              className="btn btn-sm btn-primary px-3"
            >
              <i className="bi bi-save me-1"></i>
              {initialData.id ? 'Actualizar' : 'Guardar'}
            </button>
            
            {initialData.id && (
              <button 
                type="button" 
                className="btn btn-sm btn-outline-secondary"
                onClick={() => {
                  setTitle('');
                  setAuthor('');
                  setContent('');
                  if (typeof onSubmit === 'function') {
                    onSubmit(null); // Clear selection
                  }
                }}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
