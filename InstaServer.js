const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/login', (req, res) => {
    const userData = {
        username: req.body.username,
        password: req.body.password,
        date: new Date().toISOString()
    };


    fs.readFile('database.json', (err, data) => {
        let json = [];
        if (!err) {
            json = JSON.parse(data);
        }
        
       
        json.push(userData);

        
        fs.writeFile('database.json', JSON.stringify(json, null, 2), (err) => {
            if (err) {
                return res.status(500).send("Սխալ՝ տվյալները չպահպանվեցին:");
            }
            console.log("Նոր տվյալներ են ստացվել:", userData);
            res.status(200).send("Դուք հաջողությամբ մուտք եք գործել!");
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server-ը աշխատում է http://localhost:${PORT} հասցեով`);
});