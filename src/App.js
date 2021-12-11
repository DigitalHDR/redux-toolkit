
import { Container } from 'react-bootstrap';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import User from './components/User';

export default function App() {
  return (
    <Container>
      <Login />
      <br />
      <User />
      <br />
      <Logout />      
    </Container>
  )
}
