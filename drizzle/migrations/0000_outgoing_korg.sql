CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"author" varchar(256) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"content" text NOT NULL
);
