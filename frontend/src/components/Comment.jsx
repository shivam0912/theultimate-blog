import Image from './Image'

const Comment = () => {
    return (
        <div className="p-4 bg-slate-50 rounded-xl mb-8">
        <div className="flex items-center gap-4">
            
            <Image
                src="userImg.jpeg"
                className="w-10 h-10 rounded-full object-cover"
                w="40"
            />
            
            <span className="font-medium">Johny Depp </span>
            <span className="text-sm text-gray-500">
                2 days ago
            </span>
            
                <span
                className="text-xs text-red-300 hover:text-red-500 cursor-pointer"            >
                delete
                </span>
            
        </div>
        <div className="mt-4">
            <p>I watched the whole video without skipping a single second, except for the sponsor part, and it’s a really insightful video. 🙌🙌 Please drop something like this once a week. As you said, if you watch till the end, take a moment to reflect on the entire video and what you’ve learned. Also, the last part about thinking how our ancestors paid attention to the things that truly mattered thousands of years ago really resonated with me. It’s a thought-provoking perspective.</p>
        </div>
        </div>
    );
};

export default Comment