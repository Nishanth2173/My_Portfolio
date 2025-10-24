import { Container, Row, Col, Card } from 'react-bootstrap';
import { GraduationCap, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Education</h2>
        <Row className="g-4">
          <Col md={12}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-start mb-3">
                  <GraduationCap size={32} className="text-primary me-3 flex-shrink-0" />
                  <div>
                    <h3 className="h5 mb-1">Computer Science and Engineering (AI & ML)</h3>
                    <p className="text-muted mb-1">Gitam University, Hyderabad, Telangana</p>
                    <p className="small text-muted mb-2">2021 – 2025</p>
                    <p className="mb-0"><strong>CGPA:</strong> 7.4 | <strong>Percentage:</strong> 70.3%</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-start mb-3">
                  <Award size={28} className="text-primary me-3 flex-shrink-0" />
                  <div>
                    <h3 className="h5 mb-1">Intermediate Education</h3>
                    <p className="text-muted mb-1">Bhashyam Junior College</p>
                    <p className="small text-muted mb-2">2019 – 2021</p>
                    <p className="mb-0"><strong>Percentage:</strong> 90.1%</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-start mb-3">
                  <Award size={28} className="text-primary me-3 flex-shrink-0" />
                  <div>
                    <h3 className="h5 mb-1">10th Class</h3>
                    <p className="text-muted mb-1">Bhashyam Public School</p>
                    <p className="small text-muted mb-2">2018 – 2019</p>
                    <p className="mb-0"><strong>Percentage:</strong> 88.35% | <strong>GPA:</strong> 9.3</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
