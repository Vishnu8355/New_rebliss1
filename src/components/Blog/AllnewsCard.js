import React from 'react'
import Blogcard from './Blogcard'



export default function AllnewsCard(props) {
  return (
    <div>
      <main>

        <section className="all-news section-padding blog bg-transparent style-3">
          <div className="container">
            <Blogcard
              image="assets/img/blog/6.png"
              news="news"
              days="12 Days ago"
              title="How To Become A Python Develop Expert"
              paragraph="If there’s one way that wireless technology has changed the way we work, it’s that will everyone [...]"
              text="a"
              text1="By"
              text2="Admin"
              number1="24"
              number2="740k"
            />

            <Blogcard
              image="assets/img/blog/10.png"
              news="news"
              days="15 Days ago"
              title="How To Become A Python Develop Expert"
              paragraph="If there’s one way that wireless technology has changed the way we work, it’s that will everyone [...]"
              text="a"
              text1="By"
              text2="Admin"
              number1="20"
              number2="770k"
            />

            <Blogcard
              image="assets/img/blog/11.png"
              news="news"
              days="16 Days ago"
              title="How To Become A Python Develop Expert"
              paragraph="If there’s one way that wireless technology has changed the way we work, it’s that will everyone [...]"
              text="a"
              text1="By"
              text2="Admin"
              number1="27"
              number2="750k"
            />

            <Blogcard
              image="assets/img/blog/12.png"
              news="news"
              days="18 Days ago"
              title="How To Become A Python Develop Expert"
              paragraph="If there’s one way that wireless technology has changed the way we work, it’s that will everyone [...]"
              text="a"
              text1="By"
              text2="Admin"
              number1="26"
              number2="7450k"
            />


          </div>
        </section>

      </main>

    </div>
  )
}
