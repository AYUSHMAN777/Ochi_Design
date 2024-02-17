import React from 'react'
import { motion, useAnimation } from "framer-motion"
function Features() {

    const card = [useAnimation(), useAnimation()]
    const handleHover = (index) => {
        card[index].start({ y: "0" });
    }
    const handleHoverEnd = (index) => {
        card[index].start({ y: "100%" });
    }




    return (
        <div className='w-full bg-[#F1F1F1]  pb-[7vw]'>
            <div className=' border-b-[1.5px] border-zinc-400 px-[5vw] pt-[2vw] '>
                <h1 className='font-["Neue_Montreal"] text-6xl text-zinc-900 py-[3vw]'>Features Project</h1>
            </div>
            <div className='Cards w-full py-[2vw]'>
                <div className=' flex gap-7 px-[4vw] mt-5 '>
                    <motion.div onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="relative cardscontainer-1  w-1/2 h-[70vh] rounded-lg">
                        <h1 className="absolute flex overflow-hidden font-['Neue_Montreal'] z-[999] text-8xl font-semibold tracking-tighter text-[#CDFA68] left-full -translate-x-[7vw] top-[11vw] ">
                            {"FYDE".split('').map((item, index) => <motion.span
                                initial={{ y: "100%" }}
                                animate={card[0]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                // end={{ y: "100%" ,opacity:0 }}
                                className='inline-block '>{item}</motion.span>)}
                        </h1>
                        <div className="Inside_card w-full h-full  overflow-hidden rounded-lg" >
                            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="relative cardscontainer-1  w-1/2 h-[70vh] rounded-lg">
                        <h1 className="absolute flex overflow-hidden font-['Neue_Montreal'] z-[999] text-8xl font-semibold tracking-tighter text-[#CDFA68] right-full translate-x-[6vw] top-[11vw] ">
                            {"VISE".split('').map((item, index) => <motion.span
                                initial={{ y: "100%" }}
                                animate={card[1]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                // end={{ y: "100%" ,opacity:0 }}
                                className='inline-block '>{item}</motion.span>)}
                        </h1>
                        <div className="Inside_card w-full h-full  overflow-hidden rounded-lg">
                            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Features