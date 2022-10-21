import React from 'react'
import FirstPost from '../Blog/FirstPost'

export default function PopularPost(props) {
  return (
    <div>
      <section className="popular-posts pt-50 pb-100 border-bottom brd-gray">
        <div className="container">
          <h5 className="post-sc-title text-center text-uppercase mb-70">
            Popular Posts
          </h5>
          <div className="row gx-5">
            <div className="col-lg-4 border-end brd-gray">
              <FirstPost
                image="assets/img/blog/card1.jpeg"
                new="News"
                para="Posted on 3 Days ago"
                para2="India is the Second-Fastest-Growing freelance market in the world, Says report"
                para1="India is the Second-Fastest-Growing freelance market in the world with a massive increase with a number of freelancers this year.

                 According to a report on 'Freelancing in 2020: An Abundance of Opportunities' by payoneer. Ranked as the Second-Fastest-Growing freelance market in the world India's freelance economy currently consists of an estimated 15 millon freelancers, the report said.The report further highlighted how the pandemic has changed the future of work with increased technology adoption, stating that a permanent change in the global workforce is inevitable. Going forward, while there will still be space for full-time employees, more and more companies will seek remote and freelance workers for a wider variety of tasks, the report said."
                textA="A"
                para4="By Admin"
                number="18"
                number2="655K"
              />
            </div>
            <div className="col-lg-4 border-end brd-gray">
              <FirstPost
                image="assets/img/blog/card3.png"
                new="News"
                para="Posted on 3 Days ago"
                para2="India is the Second-Fastest-Growing freelance market in the world, Says report"
                para1="India is the Second-Fastest-Growing freelance market in the world with a massive increase with a number of freelancers this year.

                 According to a report on 'Freelancing in 2020: An Abundance of Opportunities' by payoneer. Ranked as the Second-Fastest-Growing freelance market in the world India's freelance economy currently consists of an estimated 15 millon freelancers, the report said.The report further highlighted how the pandemic has changed the future of work with increased technology adoption, stating that a permanent change in the global workforce is inevitable. Going forward, while there will still be space for full-time employees, more and more companies will seek remote and freelance workers for a wider variety of tasks, the report said."
                textA="A"
                para4="By Admin"
                number="18"
                number2="655K"
              />
            </div>
            <div className="col-lg-4 border-end brd-gray">
              <FirstPost
                image="assets/img/blog/6.png"
                new="News"
                para="Posted on 3 Days ago"
                para2="India is the Second-Fastest-Growing freelance market in the world, Says report"
                para1="India is the Second-Fastest-Growing freelance market in the world with a massive increase with a number of freelancers this year.

                 According to a report on 'Freelancing in 2020: An Abundance of Opportunities' by payoneer. Ranked as the Second-Fastest-Growing freelance market in the world India's freelance economy currently consists of an estimated 15 millon freelancers, the report said.The report further highlighted how the pandemic has changed the future of work with increased technology adoption, stating that a permanent change in the global workforce is inevitable. Going forward, while there will still be space for full-time employees, more and more companies will seek remote and freelance workers for a wider variety of tasks, the report said."
                textA="A"
                para4="By Admin"
                number="18"
                number2="655K"
              />
            </div>
          </div>



        </div>

      </section>

    </div>
  )
}
