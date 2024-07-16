import React from 'react'
import Converse from "@/icons/Converse"
import Jordan from "@/icons/Jordan"
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav>
      <div className='bg-greyLight-500 py-2 px-14 flex justify-between items-center'>
        <div className='flex gap-x-6'>
          <Jordan />
          <Converse />
        </div>
        <div className='text-xs font-helveticaBold text-grey-700 flex'>
          {/* hardcoded text */}
          <a target='_blank' className='link-with-bar' href={"https://www.nike.com/ca/retail"}>Find a Store</a>
          <a target='_blank' className='link-with-bar' href={"https://www.nike.com/ca/help"}>Help</a>
          <a target='_blank' className='link-with-bar' href={"https://www.nike.com/ca/membership"}>Join Us</a>
          <a target='_blank' className='link-with-bar' href={"/sign-in"}>Sign In</a>
        </div>
      </div>
      <div></div>
    </nav>
  )
}

export default Navigation
