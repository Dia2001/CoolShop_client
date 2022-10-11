import React from 'react'
import FooterProfile from './components/FooterProfile'
import PersonalForm from './components/PersonalForm'
import PersonalMenu from './components/PersonalMenu'

const Profile = () => {
  return (
   <div className="flex flex-col gap-4">
        <div className="flex gap-6 bg-white my-2x p-4x rounded-md shadow-md min-h-[600px]">
            <PersonalMenu/>
            <PersonalForm/>
        </div>
        <FooterProfile/>
   </div>
  )
}

export default Profile