'use client';

export default function PostList({ posts, onEdit, onDelete }) {
  if (posts.length === 0) {
    return (
      <div className="alert alert-info">
        <i className="bi bi-info-circle me-2"></i>
        No hay posts disponibles. ¡Crea tu primer post!
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <h2 className="h4 mb-4 text-center">Publicaciones Recientes</h2>
      {posts.map((post) => (
        <div key={post.id} className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text text-muted">
                {post.content.length > 150 
                  ? `${post.content.substring(0, 150)}...` 
                  : post.content}
              </p>
              <div className="d-flex justify-content-end gap-2">
                <button
                  onClick={() => onEdit(post)}
                  className="btn btn-outline-warning btn-sm"
                >
                  <i className="bi bi-pencil-square me-1"></i>
                  Editar
                </button>
                <button
                  onClick={() => onDelete(post.id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  <i className="bi bi-trash me-1"></i>
                  Borrar
                </button>
              </div>
            </div>
            <div className="card-footer text-muted small">
              <i className="bi bi-calendar3 me-1"></i>
              {new Date(post.createdAt).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
