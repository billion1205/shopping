const express=require('express');
const router=express.Router();
const orderController=require('../controllers/orders.controller');

router.post('/',orderController.addOrder);

router.get('/',orderController.getOrders);

router.get('/success',orderController.getSuccess);

router.get('/failure',orderController.getFailure)

module.exports=router;