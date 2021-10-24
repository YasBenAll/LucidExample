import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.go("/")
        } catch(error) {
            console.log(error)
           setError("Failed to log in") 
        }

        setLoading(false)
    }

    return (
        <div style={{ minHeight: "90vh" }} >
        <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}
        >
  
      <div className="w-100" style={{ maxWidth: "400px"}}>

        <>
            <h2 className="text-center mb-4">Welcome!</h2>
            <h3 className="text-center mb-4">Enter your info below to log in.</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} 
                    required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} 
                    required />
                </Form.Group>
                <Button disabled={loading} type="submit" className="btn btn-primary w-100 mt-3">Log In</Button>
            </Form>
            <div className="w-100 text-center mt-3">
                <Link to="forgot-password">Forgot Password?</Link>
                <br></br>
                Need an account? <Link to='/signup'>Sign Up</Link> 
            </div>

            <div classname="w-100 text-center mt-3">

            </div>
        </>
        </div>
    </Container>
    </div>
    )
};

