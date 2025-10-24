import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Award } from 'lucide-react';

const certifications = [
  'Artificial Intelligence by Google (Edu Skills Foundation)',
  'Data Analytics Job Simulation by Deloitte',
  'Python Programming by Microsoft (Skill India)',
  'Data Science and Analytics by HP',
  'AI for Beginners by HP',
  'Front End web Development by IBM'
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Certifications</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <ListGroup variant="flush" className="shadow-sm rounded bg-white">
              {certifications.map((cert, idx) => (
                <ListGroup.Item key={idx} className="py-3 border-start-0 border-end-0">
                  <div className="d-flex align-items-center">
                    <Award size={20} className="text-primary me-3 flex-shrink-0" />
                    <span>{cert}</span>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
