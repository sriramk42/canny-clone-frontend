import React, { useContext } from 'react';
import { FeatureReqContext } from '../context/FeatureReqContext'
import FeedbackForm from '../components/FeedbackForm';
import '../styles/feature-add.css'

const FeatureAdd = () => {

  const [featureReqs, updateFeatureReqs] = useContext(FeatureReqContext)

  return (
    <div className="board-details">
      <div className="heading">Create a Post</div>
      <div className="description">
        <p className="line">Let us know what features would help you collect & manage user feedback</p>
      </div>
      <FeedbackForm />
    </div>
  )
}

export default FeatureAdd