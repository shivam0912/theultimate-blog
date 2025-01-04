import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";


const Navbar = () => {

  const [open,setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
        {/*Logo*/}
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
            <Image className="w-14" src="logo2.png" alt="The Ultimate Blog" w={40} h={40}/>
            <span>The Ultimate Blog</span>
        </Link>
        {/*Mobile Menu*/}
        <div className=" md:hidden ">
          <div className="cursor-pointer text-2xl"
              onClick={()=>setOpen((prev)=>!prev)}>
            {open?"X":"☰"}

          </div>
          <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 gap-8 font-medium text-lg transition-all ease-in-out
          ${open?"-right-0":"-right-[100%]"}`}>
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="">
            <button className=" py-2 px-4 rounded-3xl bg-[#86A788] text-[#FFFDEC]">Login 👤</button>
          </Link>
          </div>
        </div>
        {/*Desktop menu*/}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          

            <SignedOut>
              <Link to="/login">
                <button className=" py-2 px-4 rounded-3xl bg-[#86A788] text-[#FFFDEC]">Login 👤</button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
        </div>
        
    </div>
  )
}

export default Navbar