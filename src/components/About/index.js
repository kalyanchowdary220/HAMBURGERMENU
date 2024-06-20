// Write your code here

import Header from '../Header'

import './index.css'

const About = () => (
  <>
    <Header />
    <div>
      <div className="about-img-sm">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
        />
      </div>
      <div className="about-img-lg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
        />
      </div>
    </div>
  </>
)

export default About
