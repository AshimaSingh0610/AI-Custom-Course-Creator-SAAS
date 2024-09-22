import React, { useContext } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import { UserInputContext } from '@/app/_context/UserInputContext'

const TopicDescription = () => {
  const {userCourseInput, setUserCourseInput} = useContext(UserInputContext)

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput(prev => ({
      ...prev,
      [fieldName]:value
    }))
  }
  return (
    <div className='mx-20 lg:mx-44'>
        {/* Topic */}
        <div className='mt-5'>
            <label htmlFor="">Write the topic for which yiu want to generate the course.</label>
            <Input placeholder={'Topic'}
            className="h-12 text-md"
            defaultValue={userCourseInput?.topic}
            onChange = {(e) => handleInputChange('topic', e.target.value)}/>
        </div>
        <div className='mt-5'>
            <label htmlFor="">Tell us more about your course, what you want to include in the course (Optional)</label>
            <Textarea placeholder={'About your course'}
            className="h-12 text-md"
            defaultValue={userCourseInput?.description}

            onChange = {(e) => handleInputChange('description', e.target.value)}/>
        </div>

    </div>
  )
}

export default TopicDescription