import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { auth } from "../firebaseConfig"; // Corrected import
import { signInWithEmailAndPassword } from "firebase/auth";
import EditMenu from './EditMenu';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
      setError('');
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <Container className="py-5">
      {isAuthenticated ? (
        <EditMenu />
      ) : (
        <div className="w-50 mx-auto">
          <h2 className="text-center">Admin Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </Form.Group>
            <Button type="submit" variant="danger" className="w-100">Login</Button>
          </Form>
        </div>
      )}
    </Container>
  );
};

export default AdminPage;
