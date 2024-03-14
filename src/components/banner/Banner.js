import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import adamHands from "../../assets/img/pictures/david.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import './banner.css';
import 'animate.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Художник", "монументалист", "дизайнер"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">OleBro with love</span>
                                    <h1>{`Привет! Я Олёна`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "художник", "монументалист", "дизайнер" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>
                                        Это сайт творческого портфолио!
                                        Здесь вы найдете мир моего вдохновения, где искусство, монументализм и дизайн сочетаются, чтобы создать визуальные истории, пронизанные глубоким смыслом.
                                        Давайте вместе погрузимся в мой мир креативных возможностей и откроем новые горизонты искусства.
                                    </p>
                                    <button onClick={() => console.log('connect')}>Связаться со мной <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={adamHands} alt="David img" className={'image-neon'}/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}