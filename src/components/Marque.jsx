import React from 'react'
import { motion } from "framer-motion"
function Marque() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".01" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] '>
            <div className='text border-t-2 border-b-2 flex whitespace-nowrap overflow-hidden border-zinc-300 -mb-[1vw]'>
                <motion.h1 intial={{ x: "0" }} animate={{ x: "-100%" }} transition={{
                    ease: "linear",
                    repeat: Infinity,
                    duration: 5,
                }} className="uppercase font-['impact'] font-thin text-[20vw] leading-none px-5"> We are ochi
                </motion.h1>
                <motion.h1 intial={{ x: "0" }} animate={{ x: "-100%" }} transition={{
                    ease: "linear",
                    repeat: Infinity,
                    duration: 5,
                }} className="uppercase font-['impact'] font-thin text-[20vw] leading-none"> We are ochi
                </motion.h1>
                <motion.h1 intial={{ x: "0" }} animate={{ x: "-100%" }} transition={{
                    ease: "linear",
                    repeat: Infinity,
                    duration: 5,
                }} className="uppercase font-['impact'] font-thin text-[20vw] leading-none"> We are ochi
                </motion.h1>
            </div>
        </div>
    )
}

export default Marque