import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/images/header-img2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";
// import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Computer Scicence Student", "Web Developer", "Backend Developer", "Data Analyst"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updataText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updataText);

        if (isDeleting) {
            setDelta(preDelta => preDelta /2)
        }

        if (!isDeleting && updataText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updataText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <div className="tagline-container">
                        <span className="tagline">Welcome to my Portfolio</span>
                        </div>
                        <h1>{`Hi I'm Dominique `}</h1>
                        <h1><span className="wrap">{text}</span></h1>
                        <p>I am a Computer Science undergraduate from York University. I have worked on projects focus on data analyst, frontend web development and backend functions. Feel free to checkout the 
                        projects down below and don't hesitate to ask me anything via email!</p>
                        {/* <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button> */}
                        </div>
                    }
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
    }