import { Container, Row, Col, Card } from 'react-bootstrap';
import { Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Image Classifier',
    description: 'Using CNN model classifies images into 2 categories',
    achievement: 'Achieved accuracy of >85%',
    tech: ['CNN', 'TensorFlow', 'Python']
  },
  {
    title: 'Cardiovascular Disease Prediction',
    description: 'Built a machine learning model to predict cardiovascular diseases using medical data. Used feature selection techniques and trained models with TensorFlow.',
    achievement: 'Achieved an accuracy of 98%',
    tech: ['TensorFlow', 'Python', 'Machine Learning'],
    github: 'https://github.com/Nishanth2173/Cardio-Vascular-Disease-Prediction.git'
  },
  {
    title: 'Pharmacy Management System',
    description: 'Designed a web-based application using HTML, CSS, JavaScript, and MySQL. Implemented CRUD operations to manage inventory, billing, and customer data.',
    achievement: 'Ensured data security and efficient transaction processing',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    github: 'https://github.com/Nishanth2173/PMS.git'
  },
  {
    title:'Dynamic Weather Dashboard',
    description:'Developed a responsive web application that provides real-time weather updates using html, bootstrap, javascript and OpenWeatherMap API. Implemented features like location search, weather forecasts, and dynamic theming based on weather conditions.',
    achievement:'Enhanced user experience with smooth animations and intuitive UI',
    tech:['html','Bootstrap','JavaScript','API Integration'],
    github:'https://github.com/Nishanth2173/Dynamic-Weather-Dashboard-IBM.git',
    deploy:'https://nishanth2173.github.io/Dynamic-Weather-Dashboard-IBM/'
  },
  {
    title:'Student Learning Management System portal',
    description:'Created a Student Learning Management System portal using React, Bootstarp, Tailwind CSS, HTMl. Implemented features like course enrollment, progress tracking, and interactive quizzes.',
    achievement:'Improved student engagement and learning outcomes through interactive features',
    tech:['React','Bootstrap','Tailwind CSS','HTML','JSON','JavaScript'],
    github:'https://github.com/Nishanth2173/Student-LMS.git'
  },
  {
    title:'Student LMS Material',
    description:'Developed a comprehensive Student LMS Material website using HTML, CSS, JavaScript, and Bootstrap. Implemented features like course materials, codes, and other resources for students.',
    achievement:'Facilitated easy access to learning materials for students',
    tech:['HTML','Tailwind CSS','JavaScript','React','JSON'],
    github:'https://github.com/Nishanth2173/Student-LMS-2.git'
  },
  {
    title:'Personal Portfolio Website',
    description:'Created a personal portfolio website to showcase projects, skills, and experience using React and Bootstrap. Implemented responsive design and smooth navigation.',
    achievement:'Enhanced online presence and professional branding',
    tech:['React','Bootstrap','Tailwind CSS','CSS','JavaScript','HTML'],
    github:'https://github.com/Nishanth2173/My_Portfolio.git'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Projects & Case Studies</h2>
        <Row className="g-4">
          {projects.map((project, idx) => (
            <Col md={6} key={idx}>
              <Card className="border-0 shadow-sm h-100 hover-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start mb-3">
                    <Code2 size={28} className="text-primary me-3 flex-shrink-0" />
                    <div>
                      <h3 className="h5 mb-2">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted mb-3">{project.description}</p>
                  <p className="text-success fw-semibold mb-3">{project.achievement}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span key={techIdx} className="badge bg-primary-subtle text-primary px-3 py-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.github && (<p className="mt-3 mb-0">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      View on GitHub
                    </a>
                  </p>
                  )}
                  {project.deploy && (<p className="mt-1 mb-0">
                    <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      View live Project
                    </a>
                  </p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
