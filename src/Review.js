 const Review = () => {
  return (
    <div className="Review">

     <section className="grid">
      <section>
        <div className="first-review">
          <div className="profile">
            <img src= {require('./images/image-daniel.jpg') } alt="" id='border-1' />
            <span>
              <h1>Daniel Clifford</h1>
              <p className="verified">Verified Graduate</p>
            </span>
            <svg width="104" height="102" xmlns="http://www.w3.org/2000/svg"><path d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z" fill="#A775F1" fill-rule="nonzero"/></svg>
          </div>
          <h2 className="topic">
            I received a job offer mid-course, and the subjects I learned were current, if not more so, 
            in the company I joined. I honestly feel I got every penny’s worth.
          </h2>
          <p className="quotation">
              “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
            transition and have heard some people who had an amazing experience here. I signed up 
            for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
            The next 12 weeks was the best - and most grueling - time of my life. Since completing 
            the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
          </p>
        </div>
        
        <div className="second-review">
          <div className="profile">
            <img src= {require('./images/image-jonathan.jpg') } alt="" />
            <span>
              <h1>Jonathan Walters</h1>
              <p className="verified">Verified Graduate</p>
            </span>
          </div>
          <h2 className="topic">
          The team was very supportive and kept me motivated
          </h2>
          <p className="quotation">
                “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
            for a big company. This was one of the best investments I’ve made in myself. ”
          </p>
        </div>
      </section>

      <section>
      <div className="third-review">
          <div className="profile">
            <img src= {require('./images/image-jeanette.jpg') } alt="" />
            <span>
              <h1>Jeanette Harmon</h1>
              <p className="verified">Verified Graduate</p>
            </span>
          </div>
          <h2 className="topic">
          An overall wonderful and rewarding experience
          </h2>
          <p className="quotation">
                “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
            while doing something I love. ”
          </p>
        </div>
        
        <div className="fourth-review">
          <div className="profile">
            <img src= {require('./images/image-patrick.jpg') } alt="" id='border-2'/>
            <span>
              <h1>Patrick Abrams</h1>
              <p className="verified">Verified Graduate</p>
            </span>
          </div>
          <h2 className="topic">
            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
            learning from their experiences was easy.
          </h2>
          <p className="quotation">
                “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
          gave me the confidence necessary to be able to go out in the world and present myself as a capable 
          junior developer. The standard is above the rest. You will get the personal attention you need from 
          an incredible community of smart and amazing people. ”
          </p>
        </div>
      </section>
    </section> 

    <div className="fifth-review">
          <div className="profile">
            <img src= {require('./images/image-kira.jpg') } alt="" />
            <span>
              <h1>Kira Whittle</h1>
              <p className="verified">Verified Graduate</p>
            </span>
          </div>
          <h2 className="topic">
          Such a life-changing experience. Highly recommended!
          </h2>
          <p className="quotation">
                    “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
            professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
            student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
            did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
            project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
            could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
            experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
            100% recommend! ”
          </p>
    </div>

    </div>
  )
}

export default Review;