'use client'
import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { useRouter } from 'next/navigation';
const Nav = () => {
    const router = useRouter();

    return (
        <div className='w-full bg-red h-24'>
            <div className='flex justify-between p-7 items-center' >
                <h1 className='text-white font-extrabold text-2xl '>TURBO.AZ</h1>
                <button onClick={() => router.push("/new")} >
                    <div className='flex flex-row items-center gap-2 bg-green p-3 rounded-xl '>
                        <CiCirclePlus className='text-white w-7 h-7' />
                        <p>Yeni elan</p>
                    </div>

                </button>
            </div>
        </div>
    )
}

export default Nav
