
import Image from './Image'
import { Link } from 'react-router-dom'

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      <div className=' md:hidden xl:block xl:w-1/3'>
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
      </div>
      <div className='flex flex-col gap-4 xl:w-2/3'>
          <Link to="/test" className='text-4xl font-semibold'>
            You can replace 48 with other Tailwind size utilities (w-40, w-64, etc.) 
          </Link>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
              <span >Written by</span>
              <Link className='text-[#86A788]'>John Doe</Link>
              <span>on</span>
              <Link className='text-[#86A788]'>Web Design</Link>
              <span>2 days ago</span>
          </div>
          <p>To increase the size of the logo from inside while keeping it within a specific container size, you can use the object-contain, object-cover, or object-fill utilities in Tailwind CSS along with size adjustments (w- and h-).</p>
          <Link to="/test" className=' underline text-[#86A788] text-sm'>Read More</Link>
      </div>
    </div>
  )
}

export default PostListItem