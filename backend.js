// const express = require("express")
// const app = express();
// const port =6500

// app.get('/', (req,res)=> {
//     res.send ("hello senior gurus")
// })
 
// app.listen(port,() => {
//     console.log(`server is running on http://localhost:${port}`);
// })

 const express = require("express");
 const app = express();
 const port = 4500
 app.get('/', (req,res) => {
    res.send ("hello world")
 })
 app.listen(port,() => {
    console.log("server is running on port 4500");
 })

  
