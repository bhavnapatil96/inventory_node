let user=require('../controllers/users');
let wallet=require('../controllers/wallet')
let walletTrans=require('../controllers/walletTransaction')
let order=require('../controllers/order');
let orderItem=require('../controllers/orderItem')
let penalty=require('../controllers/penalty')
let category=require('../controllers/category')
let product=require('../controllers/product')
let photo=require('../controllers/photos')


module.exports=(app,passport)=>{
    app.post('/api/users/add',user.createUser);
    app.put('/api/users/upd',user.editUser);
    app.delete('/api/users/del',user.deleteUser);
    app.get('/api/users/fetch',user.fetchUser)
    app.get('/api/users/get',user.fetchUser)
    app.post('/api/users/login',user.createUser);


    app.post('/api/wallet/add',wallet.createWallet);
    app.get('/api/wallet/get',wallet.getWallet);

    app.post('/api/walletTrans/add',walletTrans.createWalletTransaction);












    app.post('/api/orders/add',order.createOrder)
    app.get('/api/orders/list',order.getOrders)
    app.delete('/api/orders/delete',order.deleteOrder)
    app.post('/api/orders/byDate',order.getOrdersByDate)


    app.post('/api/orderitems/add',orderItem.createOrderitem)
    app.delete('/api/orderitems/delete',orderItem.deleteOrderitem)
    app.post('/api/orderitems/byorderId',orderItem.getOrderitemByorderId)


    app.post('/api/penalty/add',penalty.createPenalty)
    app.get('/api/penalty/list',penalty.getPenalty)
    app.delete('/api/penalty/delete',penalty.deletePenalty)

    app.post('/api/catagory/add',category.createCategory)
    app.get('/api/catagory/list',category.getCategory)
    app.delete('/api/catagory/delete',category.deleteCategory)

    app.post('/api/product/add',product.createProduct)
    app.get('/api/product/list',product.fetchProduct)
    app.delete('/api/product/delete',product.deleteProduct)
    app.put('/api/product/update',product.editProduct)


    app.post('/api/photo/add',photo.createPhoto)
    app.delete('/api/photo/delete',photo.deletePhoto)
    app.post('/api/photo/getPhotosByProduct',photo.getphotos)



};