"use client"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { signOut, useSession } from '@/lib/auth-client'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const {isPending,data,error} = useSession()
  return (
    <div className='w-full'>
        <nav className='w-full flex items-center px-6 py-3 justify-between'>
            <h1>{data ? data.user.name : 'Guest'}</h1>
            {
                data ? <Button disabled={isPending} onClick={()=>signOut()}>Logout</Button> : <Button asChild>
                    <Link href={'/login'}>
                        Login
                    </Link>
                    </Button>
            }
        </nav>
        <div className='flex p-12 h-screen'>
        <div className='flex w-75 border border-gray-800 h-75 rounded-md  flex-col gap-2'>
            <div className='flex p-4  bg-zinc-800'>
                <Avatar>
                <AvatarImage src={data?.user.image ?? ""}/>
                <AvatarFallback>{data?.user.name.slice(0,2)}</AvatarFallback>
                </Avatar>
            </div>
            <div className='p-3 text-sm text-gray-400'>
                <h2>{data?.user.name}</h2>
                <p>{data?.user.email}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default page