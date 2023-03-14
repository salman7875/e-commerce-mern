import styled from 'styled-components'

import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({ flexDirection: 'column', padding: '10px' })}
`

const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  ${mobile({ height: '40vh' })}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({ padding: '10px' })}
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;

  ${mobile({ width: '100%' })}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${props => props.color};
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 10px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ width: '100%' })}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`

const Button = styled.button`
  padding: 15px;
  font-weight: 500;
  background-color: white;
  border: 2px solid teal;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' alt='img' />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jacket</Title>
          <Desc>
            Salman finished his schooling at St. Stanislaus High School in
            Bandra, Mumbai, as did his younger brothers Arbaaz and Sohail.
            Previously, he studied at The Scindia School in Gwalior for a few
            years along with his younger brother Arbaaz.
          </Desc>
          <Price>$ 20.00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
