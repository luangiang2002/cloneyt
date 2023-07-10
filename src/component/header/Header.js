import React from 'react'
import './header.scss'
import{FaBars} from 'react-icons/fa'
import{AiOutlineSearch,} from 'react-icons/ai'
import{MdNotifications,MdApps} from 'react-icons/md'
const Header = ({handleToggleSidebar}) => {
  return (
    <div className='border border-dark header'>

    <FaBars className="header_menu" size={26}
      onClick={()=>handleToggleSidebar()}
    />
    <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" 
      className='header_logo'
    />
    <form action="">
      <input type="text" placeholder='Search' />
      <button type='submit'>
        <AiOutlineSearch size={22}/>
      </button>
    </form>
    <div className="header_icons">
      <MdNotifications size={28}/>
      <MdApps size={28}/>
      <img src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png" alt="avatar" />
    </div>
    </div>
  )
}

export default Header