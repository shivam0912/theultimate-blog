
import Image from './Image'
import { Link } from 'react-router-dom'

const FeaturedPosts = () => {
    return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
        <div className=' w-full lg:w-1/2 flex flex-col gap-4'>
            <Image src="featured1.jpeg" className="rounded-3xl object-cover w-full h-full" w="895"/>
            <div className='flex items-center gap-4'>
                <h1 className=' font-semibold lg:text-lg'>01.</h1>
                <Link className='lg:text-lg text-[#86A788]'>Web Design</Link>
                <span className='text-gray-500'>2 days ago</span>
            </div>
                <Link to="/test" className='text-xl lg:text-3xl font-semibold'>
                    Lorem Ipsum is simply dummy text of the printing industry
                </Link>
        </div>

        <div className=' w-full lg:w-1/2 flex flex-col gap-4'>
            {/* second */}
            <div className=' lg:h-1/3 flex justify-between gap-4'>
                <div className='w-1/3 aspect-video'>
                    <Image src="featured2.jpeg" className="rounded-3xl object-cover w-full h-full" w="298"/>
                </div>
                {/* detail and title */}
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className=' font-semibold'>02.</h1>
                        <Link className='text-[#86A788]'>Web Design </Link>
                        <span className='text-gray-500 text-sm'>2 days ago</span>
                    </div>
                    <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-sm'>Lorem ipsum dolor sit amet consecteutr adipicsitc elit.</Link>
                </div>
                
            </div>

            {/* third */}
            <div className=' lg:h-1/3 flex justify-between gap-4'>
                <div className='w-1/3 aspect-video'>
                    <Image src="featured3.jpeg" className="rounded-3xl object-cover  w-full h-full" w="298"/>
                </div>                {/* detail and title */}
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className=' font-semibold'>03.</h1>
                        <Link className='text-[#86A788]'>Development </Link>
                        <span className='text-gray-500 text-sm'>4 days ago</span>
                    </div>
                    <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-sm'>Lorem ipsum dolor sit amet consecteutr adipicsitc elit.</Link>
                </div>    
            </div>
            {/* fourth */}
            <div className=' lg:h-1/3 flex justify-between gap-4'>
                <div className='w-1/3 aspect-video'>
                    <Image src="featured4.jpeg" className="rounded-3xl object-cover w-full h-full" w="298"/>
                </div>                {/* detail and title */}
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className=' font-semibold'>04.</h1>
                        <Link className='text-[#86A788]'>SEO Optimization</Link>
                        <span className='text-gray-500 text-sm'>5 days ago</span>
                    </div>
                    <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-sm'>Lorem ipsum dolor sit amet consecteutr adipicsitc elit.</Link>
                </div>
                
            </div>
        </div>
    </div>
)
}

export default FeaturedPosts