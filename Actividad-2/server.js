import express  from "express";

// Parte 1

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Lautaro Pappalardo")
})

app.get("/materia", (req, res) => {
    res.status(200).send("Materia: Aplicaciones Híbridas")
})

app.get("/profesor", (req, res) => {
    res.status(200).send("Profesor: Belen Marcos Galban")
})

// Parte 2

const stack = [
    "javascript", "php", "css", "html", "vue"
]

app.get("/stack/:tecnologia", (req, res) => {
    let tecnologia = stack.find(tecnologia => tecnologia == req.params.tecnologia)
    if(!tecnologia){
        res.status(400).send("a leer la documentacion entonces..")
    }else{
        res.status(200).send("donde te dejo el CV?")
    }
})

// Parte 3

const productos = [
    {id: 1, nombre: "lapiz", precio: 500},
    {id: 2, nombre: "lapicera", precio: 700},
    {id: 3, nombre: "goma", precio: 800},
    {id: 4, nombre: "cuaderno", precio: 1500},
    {id: 5, nombre: "acuarela", precio: 2000},
    {id: 6, nombre: "tijera", precio: 1700},
    {id: 7, nombre: "carpeta", precio: 2000},
    {id: 8, nombre: "sacapuntas", precio: 1800},
    {id: 9, nombre: "cartulina", precio: 1000},
    {id: 10, nombre: "plasticola", precio: 1800},
]

app.get("/productos", (req, res) => {

    let queries = req.query
    let minimo = parseFloat(queries.minimo) 
    let maximo = parseFloat(queries.maximo)

    let listaReducida = []
    
    if(minimo && maximo){
        for(let i = 0; i < productos.length; i++){
            if(productos[i].precio >= minimo && productos[i].precio <= maximo){
                listaReducida.push(productos[i])
            }
        }
        res.status(200).send(listaReducida)
    } else if(minimo){
        for(let i = 0; i < productos.length; i++){
            if(productos[i].precio >= minimo){
                listaReducida.push(productos[i])
            }
        }
        res.status(200).send(listaReducida)
    } else if(maximo){
        for(let i = 0; i < productos.length; i++){
            if(productos[i].precio <= maximo){
                listaReducida.push(productos[i])
            }
        }
        res.status(200).send(listaReducida)
    }


    res.status(200).send(productos)
})

app.get("/productos/:id", (req, res) => {
    let producto = productos.find(producto => producto.id == req.params.id)
    if(!producto){
        res.status(404).send("No se encontro el producto solicitado")
    }else{
        res.status(200).send(producto)
    }
})

// Parte 1

app.get("*", (req, res) => {
    res.status(404).send("Lo sentimos, pagina no encontrada.")
})

const server = app.listen(2030, () => console.log("running on port http://localhost:2030"))