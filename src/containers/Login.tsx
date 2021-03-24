import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Wrapper from './StyledLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validateForm = () => {
    return email.length > 0 && password.length > 0
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </Wrapper>
  )
}

export default Login