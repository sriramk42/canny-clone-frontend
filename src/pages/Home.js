import React, { useContext } from 'react'
import FeatureRequestCard from '../components/FeatureRequestCard';
import { FeatureReqContext } from '../context/FeedbackReqContext';

const Home = () => {

  const [featureReqs] = useContext(FeatureReqContext);

  return (
    <>
      <div className="home">
        <section className="home-left">
          Add Feature Request
        </section>
        <section className="home-right">
          <main>
            {featureReqs.length > 0 ?  (
              <ul>
                {featureReqs.map((featureReq) => {
                  return (
                    <li>
                      <FeatureRequestCard featureReq={featureReq} />
                    </li>
                  )
                })}
              </ul>
            ) : "No feature reqs"}
          </main>
        </section>
      </div>
    </>
  )
}

export default Home