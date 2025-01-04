import { Link } from "react-router-dom"
import Search from "./Search"


const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-xl items-center justify-center gap-8">

        <div className="flex-1 flex items-center justify-between flex-wrap ">
            <Link to="/posts" className="text-gray-800 rounded-full px-4 py-2 bg-[#86A788]">All Posts</Link>
            <Link to="/posts?cat=web-design" className="hover:bg-[#86A788] text-gray-800 rounded-full px-4 py-2">Web Design</Link>
            <Link to="/posts?cat=development" className="hover:bg-[#86A788] text-gray-800 rounded-full px-4 py-2">Development</Link>
            <Link to="/posts?cat=databases" className="hover:bg-[#86A788] text-gray-800 rounded-full px-4 py-2">Databases</Link>
            <Link to="/posts?cat=search-engines" className="hover:bg-[#86A788] text-gray-800 rounded-full px-4 py-2">Search Engines</Link>
            <Link to="/posts?cat=marketing" className="hover:bg-[#86A788] text-gray-800 rounded-full px-4 py-2">Marketing</Link>
            
        </div>
        <span className="text-xl font-medium">|</span>
        <Search/>
    
    </div>
  )
}

export default MainCategories