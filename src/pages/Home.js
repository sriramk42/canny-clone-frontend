import React, { useContext } from 'react'
import FeatureRequestCard from '../components/FeatureRequestCard';
import TopContainer from '../components/TopContainer';
import { FeatureReqContext } from '../context/FeatureReqContext';
import '../styles/home.css';
import FeatureAdd from './FeatureAdd';

const Home = () => {

  const [featureReqs] = useContext(FeatureReqContext);

  return (
    <>
      <div className="content-container">
        <div className="content-inner-container">
          <div className="subdomain-sidebar-container">
            <section className="sidebar-container">
              <FeatureAdd />
            </section>
            <section className="main-container">
              <main className="post-list-container">
                <div className="post-list">
                  {/* <TopContainer /> */}
                  {featureReqs.length > 0 ?  (
                      featureReqs.map((featureReq) => {
                        return (
                          <FeatureRequestCard featureReq={featureReq} />
                        )
                      })
                  ) : "No feature reqs"}
                </div>
              </main>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home