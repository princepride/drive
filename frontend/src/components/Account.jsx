import React from 'react';
import { userProfile } from '../data/userData'
import image from '../data/avatar.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link, Route, Routes } from 'react-router-dom';
import { UserProfileSetting } from '.';

const Account = () => {
  return (

    <div>
      <Link to='/UserProfileSetting'>
      <div className='flex p-4 justify-between'>
      <div className='flex'>
        <img
          className='rounded-full w-20 h-20'
          src={image}
        >
        </img>
        <div className='item-center text-xl pt-6 pl-2 font-bold'>
          {userProfile[0].lastname}
        </div>
        </div>
        <div className='pt-6'>
          <MdOutlineKeyboardArrowRight size={30}/>
        </div>
      </div>
      </Link>
      <Routes>
        <Route path='/UserProfileSetting' element = {<UserProfileSetting />}></Route>
      </Routes>
    </div>

  )
}

export default Account