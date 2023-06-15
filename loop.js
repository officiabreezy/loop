for (let i=0;i<5;i++) {
    console.log(i);
}

let i = 0
while (i < 5) {
    console.log(i); i++

}


const express = require("express");
const app = express();
const port = 4500
app.get('/', (req,res) => {
   res.send ("hello world")
})
app.listen(port,() => {
   console.log("server is running on port 4500");
})
