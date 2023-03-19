import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Product from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  // GET ALL PRODUCT
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : 'http://localhost:5000/api/products'
        )
        setProducts(res.data)
      } catch (err) {
        console.log(err.message)
      }
    }
    getProducts()
  }, [cat])

  // FILTER PRODUCT
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter(item =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      )
  }, [products, cat, filters])

  // GET SORTED PRODUCT
  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts(prev => {
        return [...prev].sort((a, b) => a.createdAt - b.createdAt)
      })
    } else if (sort === 'asc') {
      setFilteredProducts(prev => {
        return [...prev].sort((a, b) => a.price - b.price)
      })
    } else {
      setFilteredProducts(prev => {
        return [...prev].sort((a, b) => b.price - a.price)
      })
    }
  }, [sort])

  return (
    <Container>
      {cat
        ? filteredProducts.map(item => <Product key={item._id} item={item} />)
        : products
            .slice(0, 8)
            .map(item => <Product key={item._id} item={item} />)}
    </Container>
  )
}

export default Products
