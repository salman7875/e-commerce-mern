import styled from 'styled-components'

import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  ${mobile({ padding: '0', flexDirection: 'column' })}
`

const Categories = () => {
  return (
    <Container>
      {categories.map(category => (
        <CategoryItem key={category.id} item={category} />
      ))}
    </Container>
  )
}

export default Categories
