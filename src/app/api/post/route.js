import { NextResponse } from 'next/server';
import { db } from '@/drizzle/db';
import { posts } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

// Crear un post
export async function POST(request) {
  const { title, author, content } = await request.json();
  const newPost = await db.insert(posts).values({ title, author, content }).returning();
  return NextResponse.json(newPost[0]);
}

// Leer todos los posts
export async function GET() {
  const allPosts = await db.select().from(posts);
  return NextResponse.json(allPosts);
}

// Actualizar un post
export async function PUT(request) {
  const { id, title, author, content } = await request.json();
  const updatedPost = await db.update(posts).set({ title, author, content }).where(eq(posts.id, id)).returning();
  return NextResponse.json(updatedPost[0]);
}

// Borrar un post
export async function DELETE(request) {
  const { id } = await request.json();
  const deletedPost = await db.delete(posts).where(eq(posts.id, id)).returning();
  return NextResponse.json(deletedPost[0]);
}