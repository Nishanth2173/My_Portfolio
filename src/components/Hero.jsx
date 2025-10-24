import { Container, Row, Col, Button } from 'react-bootstrap';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section py-5">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={12} className="text-center">
            <div className="hero-content">
              <h1 className="display-3 fw-bold mb-3">Nuthi Nishanth</h1>
              <h2 className="h4 text-muted mb-4">Aspiring Web Developer | MERN Stack | AI Enthusiast</h2>
              <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px' }}>
                Enthusiastic Junior Software Engineer specializing in web technologies and its frameworks like react, node with a strong foundation in
                JavaScript, HTML, and CSS. Passionate about creating intuitive, responsive, and scalable web
                applications while collaborating in a team environment.
              </p>
              <div className="d-flex justify-content-center gap-3 mb-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="#contact"
                  className="px-4"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  href="#projects"
                  className="px-4"
                >
                  View Projects
                </Button>
              </div>
              <div className="d-flex justify-content-center gap-4 mt-4">
                <a href="mailto:nishanthnuthi123@gmail.com" className="text-decoration-none text-dark">
                  <Mail size={24} />
                </a>
                <a href="tel:+91 7013814085" className="text-decoration-none text-dark">
                  <Phone size={24} />
                </a>
                <a href="https://www.linkedin.com/in/nishanth-nuthi-366022295" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Nishanth2173" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
