const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./Routes/auth');
const eventRoute = require('./Routes/events');  
mongoose.set('strictQuery', false);
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/auth', authRoute);
app.use('/events', eventRoute);
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

mongoose.connect('mongodb+srv://charlesgalwyn:dani1998@cluster0.jqaepa8.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true}).then(res=>{
    console.log('connected to database');
    app.listen(port, () => {
        console.log(`Playo Backend running at http://localhost:${port}`)
        }
    );
}
).catch(err=>{
    console.log(err);
});