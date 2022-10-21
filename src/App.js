import React from 'react'
import Aboutlanding from './components/Aboutlanding'
import About from './components/Header/About'
import Team from './components/Header/Team'
import Content from './components/Content'
import Features from './components/Features'
import Feq from './components/Feq'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import SecondHeader from './components/Header/SecondHeader'
import Phoneslider from './components/Phoneslider'
import Testimonial from './components/Testimonial'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Culture from './components/Header/Culture'
import Blog from './components/Blog/Blog'
import PopularPost from './components/Blog/PopularPost'
import AllnewsCard from './components/Blog/AllnewsCard'
import Contact from './components/ContactPage/Contact'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" 
          element={[ <Header/>, <SecondHeader/>, <Content/>,<Features/>,
          <Aboutlanding/>,<Phoneslider/>,<Testimonial/>, <Feq/>,<Footer/>]}/>

          <Route path="/about" element={[<Header/>,<About/>,<Team/>,<Culture/>,<Footer/>]}/>
          <Route path="/blog" element={[<Header/>,<Blog/>,<PopularPost/>,<AllnewsCard/>,<Footer/>]}/>
          <Route path="/contact" element={[<Header/>,<Contact/>,<Footer/>]}/>
        
        </Routes>
    
      </Router>
     
     
     
      
      
      
      
     
      
    </div>
  )
}
