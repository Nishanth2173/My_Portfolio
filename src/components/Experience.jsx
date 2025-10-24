import { Container, Row, Col, Card } from 'react-bootstrap';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Machine Learning Intern',
    company: 'navAjna Technologies pvt ltd',
    location: 'Hi-tech city, Hyderabad',
    period: 'May 2024 – July 2024',
    responsibilities: [
      'Developed and deployed YOLOv5 object detection models using Python, PyTorch, and OpenCV, achieving >90% mAP on real-time custom datasets.',
      'Engineered end-to-end computer vision pipelines including data annotation, augmentation, model training, hyperparameter tuning, and inference optimization.',
      'Applied transfer learning and fine-tuning techniques on deep learning architectures to reduce detection latency by 20% and improve model robustness.'
    ]
  },
  {
    title: 'Data Engineering Intern',
    company: 'Startup company (Unregistered)',
    location: 'Gachibowli, Hyderabad',
    period: 'May 2025 – Aug 2025',
    responsibilities: [
      'Built ETL pipelines in Apache NiFi to load data into Snowflake.',
      'Integrated PostgreSQL with Snowflake using NiFi processors.',
      'Automated JSON and CSV data ingestion workflows.',
      'Applied monitoring and error handling for reliable pipelines.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Experience</h2>
        <Row className="g-4">
          {experiences.map((exp, idx) => (
            <Col md={12} key={idx}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <Briefcase size={32} className="text-primary me-3 flex-shrink-0 mt-1" />
                    <div className="flex-grow-1">
                      <h3 className="h4 mb-2">{exp.title}</h3>
                      <p className="text-muted mb-1">{exp.company} | {exp.location}</p>
                      <p className="text-primary fw-semibold mb-3">{exp.period}</p>
                      <ul className="mb-0">
                        {exp.responsibilities.map((resp, respIdx) => (
                          <li key={respIdx} className="mb-2">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
