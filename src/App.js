import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/navBar';
import RoutesIndex from './routes';

function App() {
  return (
    <>
      <Router>
        <Header />
          <RoutesIndex />
      </Router>
    </>
  );
}

export default App;
