import app from "./app";

app.set("port", process.env.PORT || 1000)

const server = app.listen(app.get("port"), ()=>{
    console.log(`Server On Port ${app.get("port")}`);
})