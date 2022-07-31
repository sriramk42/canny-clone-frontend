import React from 'react'
import { FaRegCommentAlt } from "react-icons/fa"

const CommentsCount = ({count}) => {
  return (
    <div>
      <FaRegCommentAlt />
      <b>{count}</b>
    </div>
  )
}

export default CommentsCount