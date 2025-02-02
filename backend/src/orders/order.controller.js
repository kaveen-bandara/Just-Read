const Order = require('./order.model');

// post an order
const makeAnOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json({message: "Order made successfully!", savedOrder});
  } catch (error) {
    console.error("Error making order!", error);
    res.status(500).json({message: "Failed to make order!"});
  }
};

// get orders by email 
const getOrderByEmail = async (req, res) => {
  try {
    const {email} = req.params;
    const orders = await Order.find({email}).sort({createdAt: -1});
    if(!orders) {
      return res.status(404).json({message: "Order not found!"});
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders!", error);
    res.status(500).json({message: "Failed to fetch order!"});
  }
};

module.exports = {makeAnOrder, getOrderByEmail};