import React from 'react';
import { Link } from 'react-router-dom';
import CommentsCount from './CommentsCount';
import UpvoteBtn from './UpvoteBtn';
import '../styles/feature-request-card.css'

export default function FeatureRequestCard({ featureReq }) {
  return (
    <div className="feature-req-card">
      <div className="feature-votes">
        <UpvoteBtn featureReq={featureReq}/>
      </div>
      <Link className="feature-link" to={`/feature/detail/${featureReq.id}`}>
        <div className="body">
          <div className="feature-title">
            <span>{featureReq.title}</span>
          </div>
          <div className="feature-details">
            <div className="truncate">
              <p className='body'>{featureReq.description}</p>
            </div>
          </div>
        </div>
        <CommentsCount count={featureReq.comments.length}/>
      </Link> 
    </div>
  );
}
