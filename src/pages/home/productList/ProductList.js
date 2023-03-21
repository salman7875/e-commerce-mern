import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { productRows } from '../../../dummyData'
import './ProductList.css'

const ProductList = () => {
  const [data, setData] = useState(productRows)

  const deleteProductHandler = id => {
    setData(data.filter(data => data.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: params => {
        return (
          <div className='productListItem'>
            <img src={params.row.img} className='productListImg' alt='' />
            {params.row.name}
          </div>
        )
      }
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'transaction', headerName: 'Transaction Volume', width: 160 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              onClick={() => deleteProductHandler(params.row.id)}
              className='productListDelete'
            />
          </>
        )
      }
    }
  ]

  return (
    <div className='productList'>
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList
