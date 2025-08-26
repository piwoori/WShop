const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

// 헬스체크
app.get('/health', (req, res) => res.json({ ok: true }));

// TODO: /auth /products /cart /orders 라우트 연결 지점
// app.use('/auth', require('./routes/auth'));
// app.use('/products', require('./routes/products'));
// app.use('/cart', require('./routes/cart'));
// app.use('/orders', require('./routes/orders'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
