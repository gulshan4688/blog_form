import { Blog } from "../Types";
import { createContext, useState, useContext, ReactNode } from "react"
 export interface BlogContextType {
    index:number;
    blogs: Blog[];
    addBlog: (blog: Blog) => void;
    updateBlog: (blog: Blog) => void;
    deleteBlog: (id: number) => void;
}
//create context
const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const addBlog = (blog: Blog) => {
        setBlogs([...blogs, blog]);
    }
    const updateBlog = (updateBlog: Blog) => {
        setBlogs(blogs.map((blog) => (blog.id === updateBlog.id ? updateBlog : blog)))
    };
    const deleteBlog = (id: number) => {
        setBlogs(blogs.filter(Blog => Blog.id !== id))
    }
    return (
        //wrap inside the provider
        <BlogContext.Provider value={{ blogs, updateBlog, deleteBlog, addBlog }} >
            {children}
        </BlogContext.Provider>
    )
};

export const useBlogs = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error("useblogs must be use with a provider");
    }
    return context;
}