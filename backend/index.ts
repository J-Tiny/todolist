import express from 'express'
import approuter from './app'
const app = express();

const PORT = process.env.PORT || 8000 

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

approuter(app)