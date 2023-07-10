import React from 'react'
import './Comments.scss'
import Comment from './Comment'
const Comments = () => {
  const handleComment = () => {

  }
  return (
    <div className="conments">
      <p>1234 comments</p>
      <div className="comment_form d-flex w-100 my-2">
        <img src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
          alt="avatar"
          className='rounded-circle mr-3'
        />
        <form onSubmit={handleComment} className='d-flex flex-grow-1'>
          <input type="text" className='flex-grow-1' placeholder='Write a comment...' />
          <button className='border-0 p-2'>Comment</button>
        </form>
      </div>
      <div className="comments_list">
        {[...Array(15)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  )
}

export default Comments