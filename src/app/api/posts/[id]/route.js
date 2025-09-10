import { NextResponse } from 'next/server';
import { db } from '../../../../../drizzle/db.js';
import { posts } from '../../../../../drizzle/schema.js';
import { eq } from 'drizzle-orm';

// GET: Obtener un post por ID
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const post = await db.select().from(posts).where(eq(posts.id, id));
    
    if (post.length === 0) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(post[0]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener el post' },
      { status: 500 }
    );
  }
}

// PUT: Actualizar un post
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const { title, author, content } = await request.json();
    
    const updatedPost = await db.update(posts)
      .set({ title, author, content })
      .where(eq(posts.id, id))
      .returning();
    
    if (updatedPost.length === 0) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedPost[0]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al actualizar el post' },
      { status: 500 }
    );
  }
}

// DELETE: Eliminar un post
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const deletedPost = await db.delete(posts)
      .where(eq(posts.id, id))
      .returning();
    
    if (deletedPost.length === 0) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al eliminar el post' },
      { status: 500 }
    );
  }
}
