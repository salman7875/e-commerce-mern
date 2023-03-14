import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import { ShoppingCartOutlined } from '@mui/icons-material'

import { mobile } from '../responsive'

const Container = styled.div`
  height: 60px;

  ${mobile({ height: '50px' })}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ padding: '10px 0' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({ display: 'none' })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  outline: none;
  border: none;

  ${mobile({ width: '50px' })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;

  ${mobile({ fontSize: '24px' })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: 'center' })}
`

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;

  ${mobile({ fontSize: '12px', marginLeft: '5px' })}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search...' />
            <SearchIcon style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Salman.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
