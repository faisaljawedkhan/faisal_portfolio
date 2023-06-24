import React from 'react'
import "../CSS/LandingPage.css"
import ProjectsImage1 from "../../Image/Be_My_Wordsmith.webp"
import ProjectsImage2 from "../../Image/Nexus_ChatApp.webp"
import ProjectsImage3 from "../../Image/Write_My_Dissertation_For_Me.webp"
import ProjectsImage4 from "../../Image/Holistic_Learning.webp"
import { BsBoxArrowUpRight, BsGithub, BsLinkedin, BsMedium, BsBook } from "react-icons/bs";
import landingPageFeatures from '../../Data/LandingPageFeatures'

const LandingPage = () => {
    return (
        <>
            {/* Banner Section Start Here */}
            <section className="banner-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 banner-heading-para">
                            <h5>Hello World! My name is</h5>
                            <h1>Faisal J Khan</h1>
                            {/* <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p> */}
                            <p>A passionate Front-end Web Developer, with a love for creating immersive web experiences. I strive to build user-friendly, visually stunning websites that leave a lasting impact.</p>
                            <ul>
                                <li onClick={() => window.open("https://github.com/faisaljawedkhan?tab=repositories")}><i><BsGithub /></i></li>
                                <li onClick={() => window.open("linkedin.com/in/faisal-jawed-khan-8486b9157")}><i><BsLinkedin /></i></li>
                                <li onClick={() => window.open("https://faisalthermaltech.medium.com/")}><i><BsMedium /></i></li>
                                <li onClick={() => window.open("https://dev.to/faisaljawedkhan")}><i><BsBook /></i></li>
                            </ul>
                            <button>Let's talk</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Me Section Start Here */}
            <section className="about-me-section" id='about-me-section'>
                <div className="container-fluid">
                    <div className="row justify-content-evenly">
                        <div className="col-md-10 about-me-heading">
                            <h2>ABOUT ME</h2>
                            <div className="below-heading-line"></div>
                        </div>
                        <div className="col-lg-5 about-me-details">
                            <p>Welcome to my portfolio website, a goal-driven Front-end Web Developer based in India with a creative mindset and a strong passion for learning and innovating.</p>
                            <p>Currently, I am employed as a Frontend Developer at Holistic Learning, where I actively contribute to the development of cutting-edge software solutions. In addition, I find joy in sharing my insights and experiences through blogging on platforms like Medium and the dev community.</p>
                            <p>I also actively engage with the developer community on platforms like LinkedIn, Feel free to Connect or <span onClick={() => window.open("linkedin.com/in/faisal-jawed-khan-8486b9157")}><b>Follow me on my Linkedin</b></span>, where I regularly share coding-related content, tips, and insights.</p>
                            <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                        </div>
                        <div className="col-lg-5 about-me-skills-section">
                            <h3>My Skills</h3>
                            <div className="container-fluid mt-4">
                                <div className="row justify-content-around about-me-skills-button-main-div">
                                    {
                                        landingPageFeatures.map((item) => (
                                            <div className="col-5 col-sm-4 col-md-4 mb-4 about-me-skills-button">
                                                <img src={item.image} alt={item.alt} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Projects Section Start Here */}
            <section className="projects-section" id="projects-section">
                <div className="container-fluid">
                    <div className="row justify-content-evenly">
                        <div className="col-md-12 projects-section-heading">
                            <h2>PROJECTS</h2>
                            <div className="below-heading-line"></div>
                        </div>
                        <div className="col-md-11 projects-section-sub-heading">
                            <h3><span>Some Things I've Built</span></h3>
                        </div>
                        <div className="col-lg-5 pt-4 projects-image-heading">
                            <img src={ProjectsImage1} alt="Be My Wordsmith" className='img-fluid' />
                        </div>
                        <div className="col-lg-5 pt-4 projects-heading-para">
                            <h4>Featured Project</h4>
                            <h2>Be My Wordsmith</h2>
                            <p className='projects-para'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora .</p>
                            <p className='projects-skills-para'>
                                <span>JSX</span> <span>CSS</span> <span>React JS</span> <span>Bootstrap</span> <span>React Router</span>
                            </p>
                            <button><i><BsBoxArrowUpRight /></i></button>
                        </div>
                        <div className="nexusProject">
                            <div className="col-lg-5 pt-4 mt-4 projects-heading-para">
                                <h4>Featured Project</h4>
                                <h2>Nexus</h2>
                                <p className='projects-para'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora .</p>
                                <p className='projects-skills-para'>
                                    <span>JSX</span> <span>CSS</span> <span>React JS</span> <span>Bootstrap</span> <span>React Router</span>
                                </p>
                                <button><i><BsBoxArrowUpRight /></i></button>
                            </div>
                            <div className="col-lg-5 pt-4 mt-4 projects-image-heading">
                                <img src={ProjectsImage2} alt="Nexus" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-5 pt-4 mt-4 projects-image-heading">
                            <img src={ProjectsImage3} alt="Write My Dissertation for me" className='img-fluid' />
                        </div>
                        <div className="col-lg-5 pt-4 mt-4 projects-heading-para">
                            <h4>Featured Project</h4>
                            <h2>Write My Dissertation for me</h2>
                            <p className='projects-para'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora .</p>
                            <p className='projects-skills-para'>
                                <span>JSX</span> <span>CSS</span> <span>React JS</span> <span>Bootstrap</span> <span>React Router</span>
                            </p>
                            <button><i><BsBoxArrowUpRight /></i></button>
                        </div>
                        <div className="holisticLearning">
                            <div className="col-lg-5 pt-4 mt-4 projects-heading-para">
                                <h4>Featured Project</h4>
                                <h2>Holistic Learning</h2>
                                <p className='projects-para'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora .</p>
                                <p className='projects-skills-para'>
                                    <span>JSX</span> <span>CSS</span> <span>React JS</span> <span>Bootstrap</span> <span>React Router</span>
                                </p>
                                <button><i><BsBoxArrowUpRight /></i></button>
                            </div>
                            <div className="col-lg-5 pt-4 mt-4 projects-image-heading">
                                <img src={ProjectsImage4} alt="Holistic Learning" className='img-fluid' />
                            </div>
                        </div>
                        {/* <div className="col-md-11 projects-section-sub-heading-last">
                            <h3><span>Other Noteworthy Projects</span></h3>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Resume Section Start Here */}
            <section className="resume-heading-section" id="resume-heading-section">
                <div className="container resume-section-inner-div">
                    <div className="row justify-content-center">
                        <div className="col-md-12 resume-heading">
                            <h2>RESUME</h2>
                            <div className="below-heading-line"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="resume-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 resume-details">
                            <div className="company-details">
                                <h2>Work Experience</h2>
                                <h3>Holistic Learning</h3>
                                <div className="work-details">
                                    <h3>Jan 2020 - Till Now</h3>
                                    <h4>Front-end Developer</h4>
                                    <p>I can create websites using React JS and handle their wordpress website also.</p>
                                </div>
                            </div>
                            <div className="education-details">
                                <h3>Education</h3>
                                <div className="education-passed-date">
                                    <h4>Nov 2020</h4>
                                    <p>M.Tech in Mechanical Engineering</p>
                                    <h4>May 2014</h4>
                                    <p>B.Tech in Mechanical Engineering</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contacts Section Start Here */}
            <section className="contacts-section" id="contacts-section">
                <div className="container">
                    <div className="row justify-content-evenly">
                        <div className="col-md-10 contacts-heading">
                            <h2>CONTACTS</h2>
                            <div className="below-heading-line"></div>
                        </div>
                        <div className="col-md-8 contacts-form-div">
                            <form action="">
                                <div className="mb-3 contacts-form-inner-div">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" id="name" />
                                </div>
                                <div className="mb-3 contacts-form-inner-div">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" id="email" />
                                </div>
                                <div className="mb-3 contacts-form-inner-div">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" name="message" id="message" rows="7"></textarea>
                                </div>
                                <div className="mb-3 contacts-form-inner-div">
                                    <button type="submit">Let's talk</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage;