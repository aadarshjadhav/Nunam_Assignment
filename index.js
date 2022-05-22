const client=require('./db_connection')
const express = require('express');
const app = express();

app.use(express.json()) // => req.body

//ROUTES//

//get voltage
app.get("/", async (req,res)=>{
    const {id} =req-params;
    try{
        const todo = await pool.query("SELECT Voltage FROM _5308_Detail_67_3_5")
    }
    catch (err){
        console.error(err.message);
    }

});




app.listen(8080, () => {
    console.log("server is listening on port 8080");
});