// Write your code here

import './index.css'

import Header from '../Header'

const Home = () => (
  <div>
    <Header />
    <div className="home-img">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
    </div>
    <div className="home-img-lg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
