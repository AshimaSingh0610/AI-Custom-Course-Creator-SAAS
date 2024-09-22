"use client"
import React, { useContext } from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
const AddCourse = () => {
    const {user} = useUser();
    const {userCourseList, setUserCourseList} = useContext(UserCourseListContext)
  return (
    <div className='flex items-center justify-between'>
        <div>
            <div className='text-2xl'>Hello, 
            <span className='font-bold'>{user?.fullName}</span></div>
            <p className='text-sm text-gray-500'>Create new course with AI, Share with friends and Earn from it</p>
        </div>
        <Link href={userCourseList?.length>=5 ?'/dashboard/upgrade':'/create-course'}>
            <Button>+ Create AI Course</Button>
        </Link>
    </div>
  )
}

export default AddCourse