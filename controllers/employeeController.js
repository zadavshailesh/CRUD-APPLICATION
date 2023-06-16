
const pool = require('../config/db')


//CREATE
const insert=async(req,res)=>{
  try {
    const { name, age, address } = req.body;
    const employeeData = await pool.query(
      "INSERT INTO EMPLOYEE(name,age,address) VALUES($1,$2,$3) RETURNING *",
      [name,age,address]
    );
  res.json(employeeData.rows[0]);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

//READ
const read = async(req,res)=>{

  try{
    const employeeData = await pool.query("SELECT * FROM EMPLOYEE");
    res.json(employeeData.rows);
  }catch(error){
    res.status(500).json(error.message);
  }

}

//READ BY ID
const readById = async(req,res)=>{
  try{
    const {id}=req.params;
    let data={};
    const employeeData = await pool.query("SELECT * FROM EMPLOYEE WHERE id=$1",[id]);

    data=employeeData;
    res.json(data);
  }catch(error){
    res.status(500).json(error.message);
  }
}


//UPDATE
const update = async(req,res)=>{
  try{
    const {id}=req.params;
    const { name, age, address } = req.body;
    const employeeData = await pool.query("UPDATE EMPLOYEE SET name=$1,age=$2,address=$3 where id=$4 returning *",[name, age, address,id]);
    res.json(employeeData.rows[0])
  }catch(error){
    res.status(500).json(error.message);
  }
}

//DELETE
const deleteEmployee = async(req,res)=>{
  try{
    const {id} =req.params;
    let data={};
    const employeeData = await pool.query("Delete from employee where id=$1 returning *",[id]);
    data=employeeData.rows[0];
    res.json(data)
  }catch(error){
    res.status(500).json(error.message);
  }
}

module.exports ={
  insert,
  read,
  readById,
  update,
  deleteEmployee
}