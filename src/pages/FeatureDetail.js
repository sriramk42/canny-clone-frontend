import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { FeatureReqContext } from '../context/FeatureReqContext'
import { UserContext } from '../context/UserContext'
import UpvoteBtn from '../components/UpvoteBtn'
import AddComment from '../components/AddComment'
import CommentsList from '../components/CommentsList'
import '../styles/feature-detail.css'

const FeatureDetail = () => {
  const [featureReqs, updateFeatureReqs] = useContext(FeatureReqContext)
  const [currentUser, setCurrentUser] = useContext(UserContext)
  const {featureID} = useParams()

  const currentFeatureReq = featureReqs.find(featureReq => featureReq.id === parseInt(featureID))
  
  return (
    <div className="content-container">
      <div className="content-inner-container">
        <div className="subdomain-sidebar-container">
          <section className="sidebar-container">
            Voters
          </section>
          <section className="main-container">
            <main className="post-container">
              <div className="post">
                <div className="main-content">
                  <div className="header-container">
                    <div className="post-header">
                      <div className="post-votes">
                        <UpvoteBtn featureReq={currentFeatureReq} />
                      </div>
                      <div className="status-title">
                        <div className="post-title">
                          {currentFeatureReq.title}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-body">
                      <div className="details">
                        <div className="markdown">
                          <div className="line">
                            {currentFeatureReq.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-composer">
                    <div className="composer">
                      <AddComment maxLength={100} featureReqs={featureReqs} updateFeatureReqs={updateFeatureReqs} featureID={featureID}/>
                    </div>
                  </div>
                </div>
                <div className="post-activity">
                  <div className="header">
                    <div className="post-activity-left-header">
                      Activity
                    </div>
                  </div>
                  <CommentsList comments={currentFeatureReq.comments} featureID={featureID} />
                </div>
              </div>
            </main>
          </section>
        </div>
      </div>
    </div>
  )
}

export default FeatureDetail