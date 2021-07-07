import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
