const express = require("express");
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const PORT = 2000;

app.use(cors());

// Load rappers data from rapper.json
const rappers = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'rapper.json'), 'utf8')
);

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

// app.get("/api", (request, response)=>{
// for(const rapper in rappers){
//         response.json(rappers[rapper])
// }

// });

app.get("/api/:name", (request, response) => {
    const rapperName = request.params.name.toLowerCase();
    if(rappers[rapperName]){
        response.json(rappers[rapperName]);
    }else{
        response.json(rappers['unknown']);
    }
});

app.listen(process.env.PORT|| PORT, () => {
    console.log(
        `the server has been initialied on port ${PORT}!, go and catch it!`
    );
});
