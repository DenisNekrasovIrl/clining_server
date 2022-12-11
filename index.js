const express = require('express');
const cors = require('cors');

const routerRequest = require('./router/request');
const routerComments = require('./router/comments');
const routerOrders = require('./router/orders');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/request', routerRequest);
app.use('/comments', routerComments);
app.use('/orders', routerOrders);

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));