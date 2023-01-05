import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'


function Face() {
  return (
    <div className='w-full pt-1 pb-4 flex justify-center items-center flex-col text-center'>
        <div className='indigo-200 h-24 w-24 rounded-full overflow-hidden'>
            <Image
                className={styles.log}
                src="/fabian.jpg"
                alt="Next.js Logo"
                width={100}
                height={100}
                objectFit='contain'
                priority
            />
        </div>
        <div>
            <h2 className=' font-black text-white'>Fabian Martinez Rincon</h2>
            <h2>@nomadiix</h2>
        </div>
    </div>
  )
}

export default Face