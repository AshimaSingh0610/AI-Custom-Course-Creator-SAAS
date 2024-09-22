"use client";
import { Button } from "@/components/ui/button";
import React, { useContext, useState, useEffect } from "react";
import { HiClipboardDocumentCheck, HiInboxStack, HiLightBulb, HiMiniSquares2X2 } from "react-icons/hi2";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";
import { GenerateCourseLayout_AI } from "@/configs/AiModel";
import LoadingDialog from "./_components/LoadingDialog";
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { UserProfile } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import { db } from "@/configs/db";

const CreateCourse = () => {
  const StepperOptions = [
    {
      id: 1,
      name: 'Category',
      icon: <HiMiniSquares2X2 />
    },
    {
      id: 2,
      name: 'Topic & Desc',
      icon: <HiLightBulb />
    },
    {
      id: 3,
      name: 'Options',
      icon: <HiClipboardDocumentCheck />
    }
  ]


  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false)
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const {user} = useUser();
  const router=useRouter();
  useEffect(() => {
    console.log(userCourseInput);
  }, [userCourseInput]);

  const checkStatus = () => {
    if (userCourseInput?.length == 0) {
      return true;
    }
    if(activeIndex == 0 && (userCourseInput?.category?.length == 0 || userCourseInput?.category == undefined )){
      return true;
    }
    if(activeIndex == 1 && (userCourseInput?.topic?.length == 0 || userCourseInput?.topic == undefined )){
      return true;
    }else if(activeIndex == 2 && (userCourseInput?.level == undefined || userCourseInput?.duration == undefined|| userCourseInput?.displayVideo == undefined || userCourseInput?.noOfChapters == undefined)){
      return true
    }
    return false;
  };

  const GenerateCourseLayout = async () => {
    setLoading(true)
    const BASIC_PROMPT = 'Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter'
    const USER_INPUT_PROMPT = `Category: ${userCourseInput?.category}, Topic: ${userCourseInput?.topic}, Level:${userCourseInput?.level}, Duration: ${userCourseInput?.duration}, NoOf Chapters:${userCourseInput?.noOfChapters}`
    const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT
    console.log(FINAL_PROMPT);
    
    const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
    console.log(JSON.parse(result.response?.text()))
    setLoading(false)
    SaveCourseLayoutInDb(JSON.parse(result.response?.text()))
  }
  
  const SaveCourseLayoutInDb = async (courseLayout) => {
    var id = uuidv4();
    setLoading(true)
    const res = await db.insert(CourseList).values({
      courseId: id,
      name:userCourseInput?.topic,
      level:userCourseInput?.level,
      category:userCourseInput?.category,
      courseOutput:courseLayout,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      userProfileImage:user?.imageUrl
    })
    console.log("Finish");
    setLoading(false);
    router.replace('/create-course/'+id)
  }
  
  return (
    <div>
      {/* Stepper */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-primary font-medium">Create Course</h2>
        <div className="flex mt-10">
          {StepperOptions.map((item, index) => (
            <div className="flex items-center">
              <div className="flex flex-col items-center w-[10px] md:w-[100px]">
                <div
                  className={`bg-gray-200 p-3 rounded-full text-white ${
                    activeIndex >= index && "bg-primary"
                  }`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm">{item.name}</h2>
              </div>
              {index != StepperOptions?.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 
                ${activeIndex >= index && "bg-primary"}`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Components */}

      {/* Next Previous Button */}
      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {activeIndex == 0 ? <SelectCategory /> : null}
        {activeIndex == 1 ? <TopicDescription /> : null}
        {activeIndex == 2 ? <SelectOption /> : null}

        <div className="flex justify-between mt-10">
          <Button
            variant="outline"
            disabled={activeIndex == 0}
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            Previous
          </Button>
          {activeIndex < 2 && (
            <Button
              disabled={checkStatus()}
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              Next
            </Button>
          )}
          {activeIndex == 2 && (
            <Button 
            disabled={checkStatus()}
            onClick={() => GenerateCourseLayout()}>
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>
      <LoadingDialog loading={loading}/>
    </div>
  );
};

export default CreateCourse;
