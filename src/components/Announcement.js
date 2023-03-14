import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Announcement = () => {
  return <Container>Super deal! Free shipping on Orders Over $50</Container>
}

export default Announcement
