import { Alert, Container } from 'react-bootstrap'
import React from 'react'

const NeedLogin = () => {
  return (
    <Container className='mt-4'>
        <Alert variant={'danger'}>로그인이 필요합니다</Alert>
    </Container>
  )
}

export default NeedLogin
