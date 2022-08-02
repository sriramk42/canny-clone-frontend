import React from 'react'
import '../styles/comment.css'

const Comment = ({comment}) => {
  const {content, user, replies} = comment

  const repliesArr = replies ? replies : []

  return (
    <div className="comment">
      <div className="comment-top-container">
        <div className="comment-top-container-left">
          <div className="user-avatar-container">
            <div className="user-avatar">
              <div className="avatar-container">
                <img src={`${comment.user.image.split('.')[1]}.jpg`} alt="" />
              </div>
            </div>
          </div>
          <div className="user-info">
            <h4>{user.name}</h4>
          </div>
        </div>
        <div className="comment-top-container-right">
        </div>
      </div>
      <div className="comment-bottom-container">
        <div className="comment-body">
          {content}
          {repliesArr.map((reply, i) => (
            <Comment comment={reply}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Comment