import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-5">
                <p className="text-center text-muted mb-4">
                  I'm always interested in hearing about new opportunities and collaborations.
                  Feel free to reach out!
                </p>
                <Row className="g-4">
                  <Col md={6}>
                    <div className="d-flex align-items-center p-3 border rounded hover-card">
                      <Mail size={24} className="text-primary me-3" />
                      <div>
                        <small className="text-muted d-block">Email</small>
                        <a href="mailto:nishanthnuthi123@gmail.com" className="text-dark text-decoration-none">
                          nishanthnuthi123@gmail.com
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-center p-3 border rounded hover-card">
                      <Phone size={24} className="text-primary me-3" />
                      <div>
                        <small className="text-muted d-block">Phone</small>
                        <a href="tel:+917013814085" className="text-dark text-decoration-none">
                          +91 7013814085
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-center p-3 border rounded hover-card">
                      <Linkedin size={24} className="text-primary me-3" />
                      <div>
                        <small className="text-muted d-block">LinkedIn</small>
                        <a href="https://www.linkedin.com/in/nishanth-nuthi-366022295" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                          Connect with me
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-center p-3 border rounded hover-card">
                      <Github size={24} className="text-primary me-3" />
                      <div>
                        <small className="text-muted d-block">GitHub</small>
                        <a href="https://github.com/Nishanth2173" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                          View my work
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-4">
                  <Button variant="primary" size="lg" href="mailto:nishanthnuthi123@gmail.com" className="px-5">
                    Send Email
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
