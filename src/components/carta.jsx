'use client'


import { BsBookmarkFill } from "react-icons/bs"; 
import { BsBookmark } from "react-icons/bs"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { TbEyeFilled } from "react-icons/tb";
import Image from "next/image";
import { useState } from "react";
import '../app/globals.css'
import { AiFillHeart } from "react-icons/ai"; 


export default function Carta({ image, initialLikes, visto, profPhoto, name }) {
    const [likes, setLikes] = useState(initialLikes)
    const [like, setLike] = useState(false)
    const [liked, setLiked] = useState(false)


    const handleLike = () => {
        if (like) {
            setLikes(likes - 1)
        } else {
            setLikes(likes + 1)
        }
        setLike(!like)
    }
    const handleLiked = () => {
        if (liked) {
            setLiked(liked - 1)
        } else {
            setLiked(liked + 1)
        }
        setLiked(!liked)
    }

    return (
        <>
            <div className="max-w-sm w-full rounded overflow-hidden shadow-lg w-300 relative group">
                <div className="relative h-96">
                    <Image
                        className="object-cover rounded-md cursor-pointer"
                        src={image}
                        layout="fill"
                        sizes="(max-width: 400px) 100vw, 50vw"
                        alt=""
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent bg-opacity-50 p-6 pt-12 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white">
                            {name}
                        </div>
                        <div className="flex space-x-2">
                            <div className="bg-white rounded-full  relative z-0 flex items-center justify-center w-9 h-9">
                            {!liked ? <BsBookmark className="w-4 h-4  z-10 cursor-pointer  drop-shadow-[0 0 2px green]  text-gray-900 " onClick={(handleLiked)} /> : <BsBookmarkFill className="w-4 h-4 z-10 cursor-pointer drop-shadow-[0 0 2px green] fill-pink-400" onClick={(handleLiked)} />}
                            </div>
                            
                            <div className="bg-white rounded-full  relative z-0 flex items-center justify-center w-9 h-9">
                                {!like ? <AiOutlineHeart className="w-5 h-5  z-10 cursor-pointer  drop-shadow-[0 0 2px green]  text-gray-900 " onClick={(handleLike)} /> : <AiFillHeart className="w-5 h-5 z-10 cursor-pointer drop-shadow-[0 0 2px green] fill-pink-400" onClick={(handleLike)} />}
                            </div>
                        </div>
                    </div>
                </div >

                <div className="flex justify-evenly p-1">
                    <div className="flex items-center p-1">
                        <Image
                            className="rounded-full me-1.5 cursor-pointer"
                            src={profPhoto}
                            width={25}
                            height={25}
                            alt=""
                        />
                        <p className="font-bold text-sm w-64 cursor-pointer">
                            {name}
                            <span className="bg-gray-400 text-[10px] ms-1.5 font-extrabold p-0.5 pl-1 pr-1 rounded-sm hover:bg-black cursor-pointer text-white">
                                PRO
                            </span>
                        </p>

                    </div>
                    <div className=" w-full flex items-center h-10 justify-end">
                        <p className="font-bold text-xs flex items-center p-1">
                            {!like ? <AiFillHeart className="w-4 h-4 me-1 cursor-pointer" onClick={(handleLike)} /> : <AiFillHeart className="w-4 h-4 me-1 cursor-pointer fill-pink-400" onClick={(handleLike)} />}{likes}
                        </p>
                        <p className="font-bold text-xs flex items-center p-1"><TbEyeFilled className="w-4 h-4 me-1" />
                            {Number(String(visto).replace('.', '')) >= 1000 ? `${(Number(String(visto).replace('.', '')) / 1000).toFixed(1)}k` : Number(visto)} {/* convertir visto a string para quitar el punto y luego convertirlo a numero para poder redondearlo en k*/}
                        </p>
                    </div>

                </div>



            </div>
        </>
    )

}