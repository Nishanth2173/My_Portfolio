import { Container, Row, Col, Badge } from 'react-bootstrap';

const skillCategories = [
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Redux', 'Express.js', 'TypeScript', 'Next.js']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Snowflake']
  },
  {
    title: 'Styling & Frameworks',
    skills: ['SASS & SCSS', 'Bootstrap', 'Tailwind CSS', 'Zustand']
  },
  {
    title: 'Machine Learning & Data Analysis',
    skills: ['Scikit-learn', 'TensorFlow', 'Regression', 'ML5.js', 'p5.js']
  },
  {
    title: 'Testing & Code Quality',
    skills: ['Jest', 'ESLint']
  },
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'VS Code', 'Jupyter Notebook', 'Apache NiFi', 'Postman', 'Excel', 'GitHub']
  },
  {
    title: 'UI/UX & Design',
    skills: ['Figma']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Skills</h2>
        <Row className="g-4">
          {skillCategories.map((category, idx) => (
            <Col md={6} lg={4} key={idx}>
              <div className="skill-category h-100 p-4 border rounded shadow-sm bg-white">
                <h3 className="h5 mb-3 text-primary fw-bold">{category.title}</h3>
                <div className="d-flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <Badge key={skillIdx} bg="light" text="dark" className="px-3 py-2 fs-6 fw-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
