export default function Landing(){
    return <div className="flex justify-center p-10 h-screen text-white bg-stone-950">
        <div className="border-1 rounded p-25">
            <div className="font-semibold text-4xl border-white b-10">
                Create Animated videos with ease
            </div>
            <div className="py-8">
            Enter a creative prompt to explore the potential of 2D animated video generation.
            </div>
            <div className="flex justify-center text-gray-500">
                <input className="border-2 flex justify-center p-4 rounded w-full" placeholder="What video are you making today?"></input>
            </div>

            <div className="pt-6 ">
            <button className="hover:bg-gray-700 hover:text-gray-300 hover:border-gray-700  text-gray-500 border-1 py-1 px-3 rounded-full text-xs m-1">
                Circle converting to square animation
            </button>
            <button className="hover:bg-gray-700 hover:text-gray-300 hover:border-gray-700  text-gray-500 border-1 py-1 px-3 rounded-full text-xs m-1">
                Video for 2-sum DSA problem
            </button>

            </div> 
        </div>
     </div>        
}