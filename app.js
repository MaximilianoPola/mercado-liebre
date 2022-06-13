//requires y varialbles
const express = require("express");
const app = express();
const path = require("path")

//configuraciones
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath))
//rutas
//app.use("/static", express.static(__dirname +"/public/"))
//app.use("/images", express.static(__dirname + "/public/images"))
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname , "./views/home.html"));
});
app.get("/home", function(req, res){
    res.sendFile(path.resolve(__dirname , "./views/home.html"));
});



//levantar server
app.listen(4000, () => console.log("Servidor corriendo en puerto 4000"));

