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
                            <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                            <ul>
                                <li><i><BsGithub /></i></li>
                                <li><i><BsLinkedin /></i></li>
                                <li><i><BsMedium /></i></li>
                                <li><i><BsBook /></i></li>
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
                            <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                            <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>
                            <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                        </div>
                        <div className="col-lg-5 about-me-skills-section">
                            <h3>My Skills</h3>
                            <div className="container-fluid mt-4">
                                <div className="row justify-content-around about-me-skills-button-main-div">
                                    {
                                        landingPageFeatures.map((item) => (
                                            <div className="col-5 col-sm-4 col-md-4 mb-4 about-me-skills-button">
                                                <a href="/" className="href"><img src={item.image} alt={item.alt} /></a>
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
                                <h3>Company name</h3>
                                <div className="work-details">
                                    <h3>Jan 2020</h3>
                                    <h4>Frontend Developer</h4>
                                    <p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                </div>
                            </div>
                            <div className="education-details">
                                <h3>Education</h3>
                                <div className="education-passed-date">
                                    <h4>Jan 2019</h4>
                                    <p>M.tech in Mechanical Engineering</p>
                                    <h4>Jan 2019</h4>
                                    <p>B.tech in Mechanical Engineering</p>
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