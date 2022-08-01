import React from 'react'

const Reply = ({reply, id}) => {
  const {content, replyingTo, user} = reply
  return (
    <div>
      <img src={user.image} alt="" />
      <h4>{user.name}</h4>
      <p>{content}</p>
    </div>
  )
}

export default Reply