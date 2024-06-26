'use client'

import { usePathname } from 'next/navigation'
import NasiCokot from './plant'
import DimsumComponen from './flower'
import { SetStateAction, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Dimsum() {

    // const { data: session, status } = useSession()
    // console.log(session)
    // console.log(status)
    // const router = useRouter()
    // useEffect(() => {
    //     if(status === 'unauthenticated'){
    //         router.push('/auth/signin')
    //     } else if(status === 'authenticated'){
    //         router.push('/katalog')
    //     }
    // }, [router, status])


    const pathName = usePathname()
    const [state, setState] = useState(<DimsumComponen />)

    const NavigationProduct = ({ nameValue, href }: { nameValue: string, href: React.SetStateAction<React.JSX.Element> }) => {
        return (
            <div className='text-center py-2 px-3 rounded-full outline outline-2 hover:outline-4 '>
                <motion.h1 className='text-xl font-medium cursor-pointer' onClick={() => { setState((href)) }} whileHover={{ scale: 1.1 }}>{nameValue}</motion.h1>
            </div>
        )
    }

    return (
        <div className='mt-20 px-4 py-20 mx-5 bg-[#ADBC9F]'>
            <h1 className='text-7xl font-bold text-center mb-10'>CATALOG</h1>
            <hr className='w-full h-1 bg-black mt-4' />
            <div className='flex gap-10 flex-wrap my-10 justify-center'>
                <NavigationProduct nameValue='Fresh Flower' href={(<DimsumComponen />)} />
                <NavigationProduct nameValue='Live Plants' href={(<NasiCokot />)} />
            </div>
            {state}
        </div>
    )
}


