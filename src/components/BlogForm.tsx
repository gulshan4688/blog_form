import { useEffect, useState } from "react";
import { useBlogs } from "../shared/BlogContext"
import { Blog } from "../Types";

interface BlogFromProps {
  existingBlog?: Blog; // the question mark is for optional property that if its passed then use it and if not the ignore it
  onclose: () => void;
}

const BlogForm: React.FC<BlogFromProps> = ({ existingBlog, onclose }) => {

  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || ''); // agar title hai to use kro ni to empty string 
  const [description, setDescription] = useState(existingBlog?.description || '')
  const [image, setImage] = useState(existingBlog?.image || '');
  const [time, setTime] = useState(existingBlog?.time || '');
  //SIDE EFFECT HOOK
  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setTime(existingBlog.time);
      setImage(existingBlog.image);
    }
  }, [existingBlog])  // whenever it renders first time it will show existing blogs that why we are using useffect

  const handleSubmit = () => {
    const blog: Blog = {
      
      id: existingBlog ? existingBlog.id : Date.now(),
      title, description, time, image,
    }
    if (existingBlog) {
      updateBlog(blog);
    }
    else {
      addBlog(blog);
    }
    onclose();
  }

  return (
    <div className="bg-white p-6 w-[30rem] rounded-lg mx-auto " >
      <h3 className=" font-semibold text-xl mb-2 text-gray-800" >
        {existingBlog ? "edit blog" : "add blog"}
      </h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)} // i was not passing the settitle funtion but was only passing the e.target.value directly in the onChange function 
          className=" block w-full px-4 py-2 border-gray-900 rounded-lg shadow-2xl focus:outline-none focus:ring-2 focus:ring-black  " />
        <textarea
          placeholder="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus: outline-none focus:ring-2 focus:ring-black resize-none h-42" />
        <input
          type="text"
          placeholder="IMG URL "
          value={image}
          onChange={e => setImage(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none
            focus:ring-2 focus:ring-black"/>
        <input
          type="date"
          placeholder="Time"
          value={time}
          onChange={e => setTime(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <section className=" flex justify-end mt-6 space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-black"
        >
          {existingBlog ? "Update" : "Add"}
        </button>
        <button
          onClick={onclose}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancel
        </button>
      </section>

    </div>
  )
}

export default BlogForm