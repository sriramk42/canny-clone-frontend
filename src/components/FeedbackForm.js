import React, {useContext, useState} from 'react'
import { FeatureReqContext } from '../context/FeatureReqContext';
import '../styles/feedback-form.css'

const FeedbackForm = () => {
  const [feedbackTitle, setFeedbackTitle] = useState('');
  const [feedbackTitleError, setFeedbackTitleError] = useState('');
  const [feedbackDetail, setFeedbackDetail] = useState('');
  const [feedbackDetailError, setFeedbackDetailError] = useState('');

  const [featureReqs, updateFeatureReqs] = useContext(FeatureReqContext)

  const validateEmpty = (value) => {
    return !value || value.length < 1;
  };

  const handleTitleChange = (e) => {
    setFeedbackTitle(e.target.value)
    setFeedbackTitleError('')
  }

  const handleDetailsChange = (e) => {
    setFeedbackDetail(e.target.value)
    setFeedbackDetailError('')
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (validateEmpty(feedbackTitle)) {
      return setFeedbackTitleError("Oops! You forgot to enter a post title");
    }
    if (validateEmpty(feedbackDetail)) {
      return setFeedbackDetailError("Oops! You forgot to enter the post details");
    }

    updateFeatureReqs([
      ...featureReqs,
      {
        id: featureReqs[featureReqs.length - 1].id + 1,
        title: feedbackTitle,
        description: feedbackDetail,
        upvotes: 0,
        upvoted: false,
        comments: []
      }
    ])
  }


  return (
    <div className="create-post-form">
      <form>
        <div className="form-field">
          <label className="uppercase-header" htmlFor="">TITLE</label>
          <div className="text-input">
            <div className="input-container">
              <input type="text" id="post-input" placeholder="Short, descriptive title" onChange={handleTitleChange} value={feedbackTitle}/>
            </div>
          </div>
          
        </div>
        
        <div className="form-field">
          <div className="uppercase-header">
            <label htmlFor="post-details">DETAILS</label>
          </div>
          <div className="auto-resize-textarea">
            <span className="input-container">
              <textarea name="post-details" placeholder="Any additional details..." id="post-details" rows="3" onChange={handleDetailsChange} value={feedbackDetail}></textarea> 
            </span>
          </div>
          
        </div>
        
        <div className="form-buttons">
          <div className="upload-image-button">

          </div>
          <button class="canny-button" onClick={(e) => onSubmitHandler(e)}>CREATE POST</button>
          {feedbackTitleError && <p>{feedbackTitleError}</p>}
          {feedbackDetailError && <p>{feedbackDetailError}</p>}
        </div>
        
      </form>
    </div>
  )
}

export default FeedbackForm