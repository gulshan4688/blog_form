import { useBlogs } from "../shared/BlogContext";
import ArticleCard from "./ArticleCard";
import { Blog } from "../Types";
// import React from 'react'
interface ArticleProps {
    onEdit: (blog: Blog) => void;
}
const ArticleList: React.FC<ArticleProps> = ({ onEdit }) => {
    const { deleteBlog, blogs } = useBlogs();
    return (
        <div className="ml-[5rem]" >
            {blogs.map((blog)=>(
                <ArticleCard key={blog.id} article={blog} onDelete={()=>deleteBlog(blog.id)} onEdit={()=>onEdit(blog)} />
            ))}
        </div>
    )
}

export default ArticleList