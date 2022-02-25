import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Work from './components/work/Work'
import Contacts from './components/contacts/Contacts'
import React, { useState } from 'react'
import './app.scss'

function App() {

  const [barMenu, setBarMenu] = useState(false);
  return (
<>
    
  <div className="app">
      <Topbar />
        <div className="sections">
        
        <Intro />
        <Portfolio />
        <Testimonials />
        <Work />
        <Contacts/>
      </div>
  </div>
  </>
  )
  
}

export default App;
