import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Nuthi Nishanth. All rights reserved.</p>
          <p className="small text-muted mb-0 mt-2">
            Built with React & Bootstrap
          </p>
        </div>
      </Container>
    </footer>
  );
}
