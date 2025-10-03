const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const testRoutes = require('./routes/testRoutes');
const pyqRoutes = require('./routes/pyqRoutes');

const app = express();
app.use(cors());
app.use(express.json({ limit: '15mb' }));

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true, useUnifiedTopology: true
})
.then(()=> console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error', err));

app.use('/api/tests', testRoutes);
app.use('/api/pyq', pyqRoutes);

app.get('/', (req, res) => res.send('ByeByeBerojgar Backend Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('Server running on', PORT));
