import React from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

// Assume you have an array of blog posts
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Lorem Ipsum dummy text of the printing",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    title:
      "Section 1.10.33 of 'de Finibus Bonorum et Malorum', written by Cicero in 45 BC",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const BlogList: React.FC = () => {
  return (
    <div className="row m-5">
      <div className="col">
        <h1 className="pb-5">Blog Page</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {blogPosts.map((post) => (
            <div className="col" key={post.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content}</p>
                  <Link to={`/blog/${post.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
