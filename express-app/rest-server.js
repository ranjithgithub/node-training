const express =  require('express')

const app = express();
var customers = []

function initData() {
    customers.push({id:1 , name:"Google", location: "Bangalore"})
    customers.push({id:2 , name:"Microsoft", location: "Hyderabad"})
    customers.push({id:3 , name:"Apple ", location: "Bangalore"})
    customers.push({id:4 , name:"Relience", location: "mumbai"})
}

initData()

app.get("/customers", (req, resp) => {
    resp.json(customers)
})

app.listen(8090, () => {
    console.log("Rest Api server started")
})