import { Col, Container, Row, Tab, Nav } from "react-bootstrap"

import { ProjectsCard } from "./ProjectsCards";
// import projImg2 from "../assets/images/project-img2.png";
import pythonImg from "../assets/images/python-img.svg";
import projImg4 from "../assets/images/project-img4.jpg";
import htmlCSSImg from "../assets/images/CSS-HTML.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
// import { isVisible } from "@testing-library/user-event/dist/utils";

export const Projects = () => {

    const Python_Projects = [
          {
            title: "Big Data System",
            description: "Algorithms for searching frequent itemset",
            imgUrl: pythonImg,
            repo: "https://github.com/domchan2000/Big-Data-System",
            demo: ""
          },
          {
            title: "Model Fitting",
            description: "Ransac-based photo fitting",
            imgUrl: pythonImg,
            repo: "https://github.com/domchan2000/Computer-Vision/tree/main/A3",
            demo: "https://colab.research.google.com/drive/15TWDYbWRugSp3spt4o-BTcSreIzenVYo?authuser=1",
          },
          {
            title: "Covid19api_Lang_Adapter",
            description: "An language adapter to translate languages to English for the covid19api",
            imgUrl: pythonImg,
            repo: "https://github.com/domchan2000/covid19-api/blob/structual_pattern/app/utils/language_adapter.py",
            demo: ""
          },
          {
            title: "Optical Flow",
            description: "Motion analyse of images between a short sequences",
            imgUrl: pythonImg,
            repo: "https://github.com/domchan2000/Computer-Vision/tree/main/A4",
            demo: "https://colab.research.google.com/drive/1JA-svpyTbXvQdkcwBdRuMMYsrWWNou4u?usp=sharing",
          }
    ]
    const JavaScript_Projects = [
        {
            title: "Coffee meetups",
            description: "Simple React Meeting Scheduler",
            imgUrl: projImg4,
            repo:"https://github.com/domchan2000/meetup",
            demo:"https://domchan2000.github.io/meetup/#/",
          },
          {
            title: "FCC_Technical_Doc",
            description: "Certificated Projects from Responsive Web Design by FreeCodeCamp",
            imgUrl: htmlCSSImg,
            repo:"https://github.com/domchan2000/FreeCodeCamp_Proj/tree/main/ResponsiveWebDesign/Technical%20Documentation%20Page",
            demo:"https://domchan2000.github.io/FreeCodeCamp_Proj/ResponsiveWebDesign/Technical%20Documentation%20Page/technicalPage",
          },
          {
            title: "FCC_Product_Page",
            description: "Certificated Projects from Responsive Web Design by FreeCodeCamp",
            imgUrl: htmlCSSImg,
            repo:"https://github.com/domchan2000/FreeCodeCamp_Proj/tree/main/ResponsiveWebDesign/Product%20Landing%20Page",
            demo:"https://domchan2000.github.io/FreeCodeCamp_Proj/ResponsiveWebDesign/Product%20Landing%20Page/productLandingPage",
          },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <h2>Projects</h2>
                    {/* <p>Here's a list of projects that I have put on github</p> */}
                        </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Python</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">JS/HTML/CSS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Java (Coming Soon)</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row className="centered-content">
                                {
                                    Python_Projects.map((project, index) => {
                                        return (
                                            <ProjectsCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                                <span>More Projects Will Be Live Soon!</span>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row className="centered-content">
                                {
                                   JavaScript_Projects.map((project, index) => {
                                        return (
                                            <ProjectsCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            <span>More Projects Will Be Live Soon!</span>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Row><span>More Projects Will Be Live Soon!</span></Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image" src={projectsBackgound}/> */}
        </section>
    )
}