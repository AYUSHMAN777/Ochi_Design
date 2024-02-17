import React from 'react'

function Cards() {
    return (
        <div className=" border-t-[1px]  border-[#000] px-[3vw]  flex items-center justify-center gap-6 w-full h-screen bg-[#F1F1F1] ">
            <div className=" relative w-1/2 h-[57vh] flex items-center justify-center rounded-lg bg-[#004D43]">
                <img className='w-[12vw] h-[5vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="absolute text-[#CDEA68] border-[1px] border-[#CDEA68] py-[7px] px-3 rounded-full translate-y-[10vw] -translate-x-[15vw] text-sm ">&copy;2019-2022</button>
            </div>
            <div className="relative  rounded-lg w-1/2 h-[57vh] flex justify-center items-center gap-5  ">
                <div className=' w-1/2 h-full bg-[#212121] rounded-lg flex items-center justify-center'>
                    <img className="h-[7vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className="absolute text-[#CDEA68] border-[1px] border-[#CDEA68] py-[7px] px-3 rounded-full translate-y-[10.2vw] text-sm "> RATING 5.0 ON CLUTCH</button>
                </div>
                <div className=" relative w-1/2 h-full bg-[#212121] rounded-lg  flex items-center justify-center">
                    <img className="h-[8.5vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className="absolute text-[#CDEA68] border-[1px] border-[#CDEA68] py-[7px] px-3 rounded-full text-sm translate-y-[10.2vw] ">BUSINESS BOOTCAMP ALLUMNI</button>
                </div>
            </div>
        </div>
    )
}

export default Cards