import './App.css'
import { Container, Button } from '@mui/material'

export const App = () => {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Button variant="contained">Hello World</Button>
      </Container>
    </>
  )
}
