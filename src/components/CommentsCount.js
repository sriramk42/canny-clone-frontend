import React from 'react'
import { FaRegCommentAlt } from "react-icons/fa"
import '../styles/comments-count.css'

const CommentsCount = ({count}) => {
  return (
    <div className="post-comments-count">
      <span className="icon-comment"><FaRegCommentAlt /></span>
      <span>{count}</span>
      
    </div>
  )
}

export default CommentsCount