import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutMeStyle from './aboutme.module.css'
export default function Aboutme(){
    return(
    <>
    <div className={aboutMeStyle.aboutMe}>
    <Container className={aboutMeStyle.container}>
      <Row>
        <Col className={aboutMeStyle.col}>
        <img className={aboutMeStyle.aboutMeImg} src="/ECPC.jpg"/>
        </Col>
        <Col className={aboutMeStyle.col}>
        <h5 className={aboutMeStyle.text}>
            I am Mohamed Shams, I will go to 3 level in Computer Science And Information at Assiut University,
         ,I am Mentor at ICPC Assiut, and I am also participated in Egyptian Collegiate Programming Contest (ECPC).
        </h5> 
        </Col>
      </Row>
      </Container>
    </div>
    </>
    )
}