import React from 'react'

function About() {
    return (
        <div  data-scroll data-scroll-speed="-.1" className="w-full  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-zinc-800 ">
            <h1 className="text-[4vw] font-['Neue_Montreal'] leading-[4.5vw] tracking-tight p-16">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds,<span className="after:content-[''] after: border-b-2 border-slate-900"> sell products, explain complex ideas,</span>  and hire great people</h1>
            <div className='flex  w-full border-t-[1px] pt-4 mt-2 border-[#a1b562] h-[80vh] ' >
                <div className='w-1/2 px-16 h-[60vh]'>
                    <h1 className='text-5xl text-black'>Our Approach:</h1>
                    <button className=' mt-5 uppercase flex items-center gap-4 bg-zinc-900 text-white py-3 px-5 rounded-3xl border-solid'>read more
                        <div className='h-2 w-2 rounded-full bg-white'></div>
                    </button>
                </div>
                <div className='w-1/2 h-[60vh] mt-2 mr-12 rounded-lg bg-red-900'>
                    <img className='rounded-lg ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About