const express=require('express');
const router=express.Router();
const orderController=require('../controllers/orders.controller');

router.post('/',orderController.addOrder);

router.get('/',orderController.getOrders);



module.exports=router;