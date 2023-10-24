import React from 'react'
import "../CSS/LandingPage.css"
import ProjectsImage1 from "../../Image/Be_My_Wordsmith.webp"
import ProjectsImage2 from "../../Image/Nexus_ChatApp.webp"
import ProjectsImage3 from "../../Image/Write_My_Dissertation_For_Me.webp"
import ProjectsImage4 from "../../Image/Holistic_Learning.webp"
import WebsiteD from "../../Image/Website_Development.webp"
import DigitalM from "../../Image/Digital_Marketing.webp"
import { BsBoxArrowUpRight, BsGithub, BsLinkedin, BsMedium, BsBook } from "react-icons/bs";
import landingPageFeatures from '../../Data/LandingPageFeatures'
import { Link } from 'react-router-dom'

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
                                <li><Link to="https://github.com/faisaljawedkhan?tab=repositories" target="_blank" rel="noopener noreferrer"><i><BsGithub /></i></Link></li>
                                <li><Link to="https://www.linkedin.com/in/faisal-jawed-khan-8486b9157/" target="_blank" rel="noopener noreferrer"><i><BsLinkedin /></i></Link></li>
                                <li><Link to="https://faisalthermaltech.medium.com/" target="_blank" rel="noopener noreferrer"><i><BsMedium /></i></Link></li>
                                <li><Link to="https://dev.to/faisaljawedkhan" target="_blank" rel="noopener noreferrer"><i><BsBook /></i></Link></li>
                            </ul>
                            <a href="#contacts-section" className="href"><button>Let's talk</button></a>
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
                            <p>Welcome to my portfolio website, a goal-driven <span className='font-bold'>Front-end Web Developer</span> based in India with a creative mindset and a strong passion for learning and innovating. Check out some of my work in the <span className='font-bold'>Projects</span> section.</p>
                            <p>Currently, I am employed as a Frontend Developer at <span className='social-link'><Link to="https://www.holisitclearning.com/" target="_blank" rel="noopener noreferrer">Holistic Learning</Link></span>, where I actively contribute to the development of cutting-edge software solutions. In addition, I find joy in sharing my insights and experiences through blogging on platforms like <span className="font-bold">Medium</span> and the <span className="font-bold">dev community</span>.</p>
                            <p>I also actively engage with the developer community on platforms like <span className="font-bold">LinkedIn</span>, Feel free to Connect or <span className='social-link'><Link to="https://www.linkedin.com/in/faisal-jawed-khan-8486b9157/" target="_blank" rel="noopener noreferrer">Follow me on my Linkedin</Link></span>, where I regularly share coding-related content, tips, and insights.</p>
                            <p>I'm open to <span className="font-bold">Job and Freelancing opportunities</span> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
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
                            <p className='projects-para'>I build Be My Wordsmith's website from scratch using frontend tools I am familiar with. They are a content writing company.</p>
                            <p className='projects-skills-para'>
                                <span>JSX</span> <span>CSS</span> <span>React JS</span> <span>Bootstrap</span> <span>React Router</span>
                            </p>
                            <Link to="https://www.bemywordsmith.com/" target="_blank" rel="noopener noreferrer"><button><i><BsBoxArrowUpRight /></i></button></Link>
                        </div>
                        <div className="nexusProject">
                            <div className="col-lg-5 pt-4 mt-4 projects-heading-para">
                                <h4>Featured Project</h4>
                                <h2>Nexus</h2>
                                <p className='projects-para'>This is the company's official website, which I created from scratch for the chat application Nexus.</p>
                                <p className='projects-skills-para'>
                                    <span>JSX</span> <span>CSS</span> <span>React JS</span> <span>Bootstrap</span> <span>React Router</span>
                                </p>
                                <Link to="https://www.nexuschatapp.com/" target="_blank" rel="noopener noreferrer"><button><i><BsBoxArrowUpRight /></i></button></Link>
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
                            <p className='projects-para'>React JS, Bootstrap, and other frontend tools I am familiar with were used to build the website, Write my dissertation for me, a company that provides dissertation writing services.</p>
                            <p className='projects-skills-para'>
                                <span>JSX</span> <span>CSS</span> <span>React JS</span> <span>Bootstrap</span> <span>React Router</span>
                            </p>
                            <Link to="https://www.writemydissertationforme.com/" target="_blank" rel="noopener noreferrer"><button><i><BsBoxArrowUpRight /></i></button></Link>
                        </div>
                        <div className="holisticLearning">
                            <div className="col-lg-5 pt-4 mt-4 projects-heading-para">
                                <h4>Featured Project</h4>
                                <h2>Holistic Learning</h2>
                                <p className='projects-para'>Holistic Learning is a company’s portfolio website and create their website from scratch using React JS and other frontend tools I know.</p>
                                <p className='projects-skills-para'>
                                    <span>JSX</span> <span>CSS</span> <span>React JS</span> <span>Bootstrap</span> <span>React Router</span>
                                </p>
                                <Link to="https://www.holisitclearning.com/" target="_blank" rel="noopener noreferrer"><button><i><BsBoxArrowUpRight /></i></button></Link>
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
                            <h2>SERVICES WE PROVIDE</h2>
                            <div className="below-heading-line"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="resume-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 website-development">
                            <div className="website-d-inner-div">
                                <img src={WebsiteD} alt="Website Development Services" className='img-fluid' />
                                <div className="card-body website-d-para">
                                    <p className='main-para'>Ready to have your very own website without the hassle? We make it easy! We create beautiful websites that work perfectly. You don't need to worry about technical stuff like domains or hosting - we handle it all. Your dream website is just a click away.</p>
                                    <p className='second-para'>🌐 Discover the possibilities with us!</p>
                                    <button><a href="#contacts-section" className="href">Let's talk</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 digital-marketing">
                        <div className="digital-m-inner-div">
                                <img src={DigitalM} alt="Digital Marketing Services" className='img-fluid' />
                                <div className="card-body digital-m-para">
                                    <p className='main-para'>Want more people to know about your business? That's what we do best. We help your brand grow online and get more customers. Let's make your business stand out on the internet. Your journey to success begins here.</p>
                                    <p className='second-para'>🚀 Boost your online presence now!</p>
                                    <button><a href="#contacts-section" className="href">Let's talk</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="resume-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 resume-details">
                            <div className="company-details">
                                <h2>Work Experience</h2>
                                <h3>Holistic Learning</h3>
                                <div className="work-details">
                                    <h3>Jan 2022 - Till Now</h3>
                                    <h4>Front-end Developer</h4>
                                    <p>
                                        <ul>
                                            <li>Responsible for creating their websites from scratch</li>
                                            <li>Maintain their one of the website’s backends, which is created on WordPress</li>
                                            <li>Responsible for handling c-panel and other website’s backend problems</li>
                                            <li>Ensuring web design is optimized for smartphones</li>
                                            <li>Optimizing web pages for maximum speed and scalability</li>
                                        </ul>
                                    </p>
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
            </section> */}
            {/* Contacts Section Start Here */}
            <section className="contacts-section" id="contacts-section">
                <div className="container">
                    <div className="row justify-content-evenly">
                        <div className="col-md-10 contacts-heading">
                            <h2>CONTACTS</h2>
                            <div className="below-heading-line"></div>
                        </div>
                        <div className="col-md-8 contacts-form-div">
                            <form name='contact-us-form' method="post" enctype="multipart/form-data" netlify-honeypot="bot-field" data-netlify-recaptcha="true" data-netlify="true" onSubmit="submit">
                                <input type="hidden" name='form-name' value="contact-us-form" />
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