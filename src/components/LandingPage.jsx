import React from 'react'
import { easeInOut, motion } from 'framer-motion';
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
    return (
        <div data-scroll data-scroll-speed="-.6" className='w-full h-screen bg-zinc-900 pt-1 '>
            <div className="textstructure mt-36 px-11 ">
                {["We create", "Eye-opening", "Presentation"].map((item, index) => {
                    return  <div className="masker  ">
                        <div className="w-fit flex items-center">
                            {index == 1 && (<motion.div initial={{ width: 0 }}
                                animate={{ width: "10vw" }}
                                transition={{
                                    ease:"easeInOut",
                                    repeat:0,
                                    duration:1,
                                }}
                                className=' relative  w-[10vw] h-[6.5vw]  rounded-lg mr-3 '><img className="rounded-lg object-fit  h-[6.5vw] w-[10vw]" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /> </motion.div>)}
                            <h1 className="font-['impact'] leading-[7vw]  text-8xl font-normal uppercase " >{item}</h1>
                        </div>
                    </div>
                })}
            </div>
            <div className="hr pt-[17vh] ">
                <hr />
            </div>
            <div className="footer text-slate-300" >
                <div className="heading flex justify-between px-11 items-center ">
                    {["For public and private companies", "From the first pitch to IPO",].map((item, index) => {
                        return <div className=" heading">
                            <h1 className="font-sans  tracking-normal text-base font-md mt-4 " >{item}</h1>
                        </div>
                    })}
                    <div className="design_heading mt-4 flex items-center ">
                        <h1 className='font-sans  text-base font-thin border-solid border-[1px] border-current p-1 px-6 rounded-2xl transition ease-in-out delay-0 bg-zinc-900 hover:bg-white duration-300 hover:text-black '>START THE PROJECT  </h1>
                        <span className='inline-block mx-[7px] rotate-[32deg] border-solid border-[1px] rounded-full p-[7px] transition ease-in-out delay-0 bg-zinc-900  hover:bg-white duration-1000 hover:text-black'><FaArrowUpLong /></span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default LandingPage