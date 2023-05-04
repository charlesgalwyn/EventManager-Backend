const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./Routes/auth');
const eventRoute = require('./Routes/events');  
mongoose.set('strictQuery', false);
const app = express();
const port = process.env.PORT || 8080;
const dotenv = require('dotenv')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

app.use('/auth', authRoute);
app.use('/events', eventRoute);
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(res=>{
    console.log('connected to database');
    app.listen(port, () => {
        console.log(`Playo Backend running at http://localhost:${port}`)
        }
    );
}
).catch(err=>{
    console.log(err);
});