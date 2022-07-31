import React, { useContext, useState } from 'react'
import { GoTriangleUp } from 'react-icons/go'
import { FeatureReqContext } from '../context/FeatureReqContext';


const UpvoteBtn = ({featureReq}) => {
  const [featureReqs, updateFeatureReqs] = useContext(FeatureReqContext);
  const [active, setActive] = useState(featureReq.upvoted);

  const updateData = (updatedFeatureReq) => {
    return updateFeatureReqs(
      featureReqs.map((featureReq) => {
        return featureReq.id === updatedFeatureReq.id ? updatedFeatureReq : featureReq;
      })
    );
  };

  const updateUpvoteHandler = () => {
    setActive(!active);

    if (featureReq.upvoted) {
      return updateData({ ...featureReq, upvoted: false, upvotes: featureReq.upvotes - 1 });
    }

    return updateData({ ...featureReq, upvoted: true, upvotes: featureReq.upvotes + 1 });
  };

  return (
    <div>
      <button onClick={updateUpvoteHandler}>
        <GoTriangleUp />
        <b>{featureReq.upvotes}</b>
      </button>
    </div>
  )
}

export default UpvoteBtn