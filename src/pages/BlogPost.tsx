import React from "react";
import { useParams } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

interface BlogPostPageProps {
  blogPosts: BlogPost[];
}

const BlogPost: React.FC<BlogPostPageProps> = ({ blogPosts }) => {
  const { id } = useParams<{ id: string }>();

  // Find the corresponding blog post based on the id
  const blogPost = blogPosts.find((post) => post.id === Number(id));

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="row m-5">
      <div className="col">
        <h1 className="pb-5">{blogPost.title}</h1>
        <p>{blogPost.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
