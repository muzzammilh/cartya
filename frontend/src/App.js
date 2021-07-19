import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/cart/:id?' component={Cart} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
