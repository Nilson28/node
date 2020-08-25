const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promos');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of the promo: '+req.params+' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promos/'+req.params);
})
.put((req, res, next) => {
    res.end('Updating the promotion:'+ req.params +'\n'+
    'Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting promo:'+req.param);
});

module.exports = promoRouter;