import React from 'react'
import moment from 'moment'
import './commet.scss'
const Comment = () => {
  return (
    <div className='comment p-2 d-flex'>
        <img src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png" 
      alt="avatar" 
        className='rounded-circle mr-3'
      />
      <div className="comment_body">
        <p className="comment_header mb-1">
            Submit Day *  {moment('2020-04-05').fromNow()}
        </p>
        <p className='mb-0'>Nice Video DuDe!!</p>
      </div>
    </div>
  )
}

export default Comment