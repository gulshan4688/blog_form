import { IoMdAddCircle } from "react-icons/io"
import Navigation from "./components/Navigation"
import PeopleToFollow from "./components/PeopleToFollow"
import TopicsList from "./components/TopicsList"
import TrendList from "./components/TrendList"
import { BlogProvider } from "./shared/BlogContext"
import { useState } from "react"
import { Blog } from "./Types"
import Modal from "./components/Modal"
import BlogForm from "./components/BlogForm"
import ArticleList from "./components/ArticleList"

const App = () => {
  const [isModelOpen, setModelOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | undefined >(undefined);
  const addNewBlogButton=()=>{
    setEditingBlog(undefined);
    setModelOpen(true);
  }
  const openModelForEdit=(blog:Blog)=>{
    setEditingBlog(blog);
    setModelOpen(true);
  }
  return (
    <div>
      <BlogProvider>

        <Navigation />
        <div className="flex justify-center">
          {/* main area */}
          <section className="mx-auto p-6">
            <div>
              <button onClick={addNewBlogButton} className="ml-[7rem] bg-black flex justify-center text-white px-4 py-2 rounded mb-4 ">
                Add New Blog  <IoMdAddCircle className=" ml-[0.5rem] text-lg mt-1 "/>{" "}
              </button>
              {/* articel section */}
              <ArticleList onEdit={openModelForEdit} />
              {isModelOpen && (
                <Modal onclose={()=>setModelOpen(false)} >
                    <BlogForm existingBlog={editingBlog} onclose={()=>setModelOpen(false)}  />
                </Modal>
              )}
            </div>
          </section>
          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </div>
  )
}

export default App