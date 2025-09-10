'use client';

export default function PostList({ posts = [], onEdit, onDelete }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="alert alert-info d-flex align-items-center" role="alert">
        <i className="bi bi-info-circle-fill flex-shrink-0 me-2"></i>
        <div>No hay publicaciones disponibles. ¡Crea tu primer post para comenzar!</div>
      </div>
    );
  }

  const handleDelete = (e, id) => {
    e.preventDefault();
    if (window.confirm('¿Eliminar este post?')) {
      onDelete(id);
    }
  };

  const handleEdit = (e, post) => {
    e.preventDefault();
    onEdit(post);
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Contenido</th>
            <th>Fecha</th>
            <th className="text-end">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="fw-semibold">{post.title}</td>
              <td>{post.author}</td>
              <td>
                <div className="text-truncate" style={{ maxWidth: '300px' }}>
                  {post.content}
                </div>
              </td>
              <td>
                {new Date(post.createdAt).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </td>
              <td className="text-end">
                <div className="d-flex gap-2 justify-content-end">
                  <button
                    onClick={(e) => handleEdit(e, post)}
                    className="btn btn-sm btn-outline-primary d-flex align-items-center"
                    title="Editar"
                  >
                    <i className="bi bi-pencil me-1"></i>
                    <span className="d-none d-md-inline">Editar</span>
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, post.id)}
                    className="btn btn-sm btn-outline-danger d-flex align-items-center"
                    title="Eliminar"
                  >
                    <i className="bi bi-trash me-1"></i>
                    <span className="d-none d-md-inline">Eliminar</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}