const express = require("express");

const app = express();

const PORT = process.env.PORT || 8081;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);


app.listen(PORT, function(){
    console.log("App listenning on PORT " + PORT);
})