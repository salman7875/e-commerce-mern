import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'

import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

  ${mobile({ width: '75%' })}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;

  &::disabled {
    color: green;
    cursor: not-allowed;
  }
`

const Error = styled.span`
  color: red;
`

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isFetching, error } = useSelector(state => state.user)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = e => {
    e.preventDefault()
    login(dispatch, { username, password })
    if (username.trim().length > 0 && password.trim().length > 0) {
      navigate('/')
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder='username'
            name='username'
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            type='password'
            placeholder='password'
            name='password'
            onChange={e => setPassword(e.target.value)}
          />
          <Button onClick={loginHandler}>
            {isFetching ? 'Submittong...' : 'LOGIN'}
          </Button>
          {error && <Error>Something went wrong!</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
