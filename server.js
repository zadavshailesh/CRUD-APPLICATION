const express = require('express');
const app = express();

const routes = require('./routes/employeeRoutes');

app.use(express.json());

//For routes
app.use('/',routes);


const PORT=9000;


app.listen(PORT,()=>{
  console.log(`Server is running at https://localhost ${PORT}`);
})