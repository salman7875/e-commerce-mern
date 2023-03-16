const express = require('express')
const Cart = require('../models/cart')
const {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuthorization
} = require('./verifyToken')

const router = express.Router()

// CREATE Cart
router.post('/', verifyToken, async (req, res) => {
  const newCart = new Cart(req.body)

  try {
    const savedCart = await newCart.save()
    res.status(201).json(savedCart)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

// UPDATE Cart
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    )
    res.status(200).json(updatedCart)
  } catch (err) {}
})

// DELETE Cart
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json('Cart has been deleted!')
  } catch (err) {
    res.status(500).json(err.message)
  }
})

// GET USER CART
router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId })
    res.status(200).json(cart)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

// GET ALL
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find()
    res.status(200).json(carts)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

module.exports = router
