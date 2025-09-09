import { NextResponse } from 'next/server';
import { db } from '../../../../drizzle/db.js';
import { posts } from '../../../../drizzle/schema.js';

// GET: Obtener todos los posts
export async function GET() {
  try {
    const allPosts = await db.select().from(posts);
    return NextResponse.json(allPosts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener los posts' },
      { status: 500 }
    );
  }
}

// POST: Crear un nuevo post
export async function POST(request) {
  try {
    const { title, author, content } = await request.json();
    const newPost = await db.insert(posts)
      .values({ title, author, content })
      .returning();
    
    return NextResponse.json(newPost[0], { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear el post' },
      { status: 500 }
    );
  }
}
