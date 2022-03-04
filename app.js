const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.listen(3000, ()=>{
    console.log('servidor ok');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const homeRoutes = require("./routes/homeRoutes");
app.use("/", homeRoutes); //por que este funciona solo con la barra y el about no

const aboutRoutes = require("./routes/aboutRoutes");
app.use("/about", aboutRoutes);
