import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';


const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    // logic 
    if(likedCourses.includes(course.id)) {
      // phele se liked hua pada hai tab
      setLikedCourses( (prev) => prev.filter ( (cid) => (cid !== course.id)) );
      toast.warning("Liked Removed");
    } else {
      // phele se like nahi hai 
      // insert karna h ye course liked course mai

      if(likedCourses === 0) {
        setLikedCourses([course.id]);
      } else {
        // non-empty phele se
        setLikedCourses ((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfull");
    }
  }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative '>
        <img src={course.image.url} alt='' />

        <div className='w-[40px] h-[40px] bg-white rounded-full
        absolute right-2 bottom-0.5 grid place-items-center outline-none'>
          <button onClick={clickHandler}>
           {
            !likedCourses.includes(course.id)? 
            (<FcLikePlaceholder fontSize= "1.75rem" />) : 
            (<FcLike fontSize= "1.75rem" />)
           }
          </button>
        </div>

      </div>

      <div className='p-4'>
        <p className='text-lg font-semibold leading-6 text-white'>{course.title}</p>
        <p className='mt-2 text-white'>
          {
            course.description.length > 100 ?
            (course.description.substr(0,100)) + "..." :
            (course.description)
          }
        </p>
      </div>

    </div>
  )
}

export default Card

