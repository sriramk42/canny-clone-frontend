import React, { useContext } from 'react'
import FeatureRequestCard from '../components/FeatureRequestCard';
import Navbar from '../components/Navbar';
import { FeatureReqContext } from '../context/FeatureReqContext';
import '../styles/home.css';

const Home = () => {

  const [featureReqs] = useContext(FeatureReqContext);

  return (
    <>
      <Navbar />
      <div className="main-container">
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
      </div>
    </>
  )
}

export default Home