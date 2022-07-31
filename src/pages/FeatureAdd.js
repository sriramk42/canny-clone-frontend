import React, { useContext } from 'react';
import { FeatureReqContext } from '../context/FeatureReqContext'

const FeatureAdd = () => {

  const [featureReqs, updateFeatureReqs] = useContext(FeatureReqContext)

  return (
    <div>FeatureAdd</div>
  )
}

export default FeatureAdd