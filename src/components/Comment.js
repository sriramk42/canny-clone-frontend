import React from 'react'
import Reply from './Reply'

const Comment = ({comment}) => {
  const {id, content, user, replies} = comment

  const repliesArr = replies ? replies : []

  return (
    <div>
      <img src={user.image} alt="" />
      <h4>{user.name}</h4>
      <p>{content}</p>
      {repliesArr.map((reply, i) => (
        <Reply reply={reply} id={id} key={id}/>
      ))}

    </div>
  )
}

export default Comment