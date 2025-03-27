'use client'

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <>
            <header className="flex flex-col justify-center items-center mt-20" >
                <h1 className="text-4xl md:text-5xl lg:text-[60px] lg:w-2/4 text-center font-georgia">
                    Discover the world’s <br /> top designers
                </h1 >
                <h2 className="text-sm text-center w-5/6 md:text-lg lg:text-xl md:w-3/6 lg:w-2/6 mt-8 font-Helvetica">
                    Explore work from the most talented and accomplished designers ready to take on your next project
                </h2>
                {/*searchbar */}
                <section className={`rounded-3xl bg-[#f3f3f6] flex justify-between items-center w-5/6 sm:w-5/6 md:w-4/6 lg:w-3/6  border-2 border-[#f3f3f6] h-14 mt-8 transition-all duration-500 ${isFocused ? 'bg-white border-[#ec9ebc]' : 'hover:bg-white'} sm:flex`}>
                    <div className="input2">
                        <input type="text" placeholder="What are you looking for?" id="search" className="bg-transparent rounded-md p-0 m-0 w-96 ms-2 focus:outline-none focus:ring-0 text-black focus:bg-white hover:bg-white h-11" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
                    </div>
                    <div className={`searchbtn flex items-center justify-center`}>
                        <a href="" className="flex w-15 text-sm font-semibold text-black items-center me-3">Shots <IoIosArrowDown className="" /></a>
                        <button className="site-nav-search__btn btn2 btn2--circle btn2--primary-alt fill-[#ea4c89] bg-black h-0 relative -top-6 -mt-0.5 -left-2 sm:left-[-10px] md:left-[-200px] lg:left-[0px]" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24">
                                <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" ></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" role="img" className="relative -top-10 left-4 ms-0.5 mt-0.5 text-white sm:left-[15px] md:left-[15px] lg:left-[15px]">
                                <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="" > </path>
                            </svg>
                        </button>
                    </div>
                </section>
                <section className="menu mt-8 flex justify-center gap-8 mb-4 flex-wrap">
                        <a href="" className="text-gray-400 text-xs py-1">Trending searches</a>
                        <a href="" className="bg-[#f3f3f6] px-3 py-1 rounded-3xl text-xs">landing page</a>
                        <a href="" className="bg-[#f3f3f6] px-3 py-1 rounded-3xl text-xs">e-commerce</a>
                        <a href="" className="bg-[#f3f3f6] px-3 py-1 rounded-3xl text-xs">mobile app</a>
                        <a href="" className="bg-[#f3f3f6] px-3 py-1 rounded-3xl text-xs">logo design</a>
                        <a href="" className="bg-[#f3f3f6] px-3 py-1 rounded-3xl text-xs">dashboard</a>
                        <a href="" className="bg-[#f3f3f6] px-3 py-1 rounded-3xl text-xs">icons</a>
                </section>
                <section className="menu2 ">
                    
                </section>
            </header>


        </>
    )


}