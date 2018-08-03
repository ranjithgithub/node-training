const express =  require('express')
const hbs = require('hbs')
const axios = require('axios')
const app =  express()

hbs.registerPartials(__dirname+"/views/partials")
hbs.registerHelper("getCurrentYear", () =>{
  return new Date().getFullYear()
})

hbs.registerHelper("toUpper", (text) => {
    return text.toUpperCase();
})
app.set('view engine', 'hbs')
app.use(express.static(__dirname+"/public"))
app.use(function(req, resp, next) {
  console.log('Testing middleware')
  next()
})

app.get("/", (req, resp) => {
    // resp.writeHead(200, {"Content-type": "text/html"})
    // resp.write("<h2> Hello Express App <h2>")
    // resp.end()

    resp.render('home', {
        message: "This is the home page",
        currentYear: new Date().getFullYear()
    })
})

app.get("/about", (req, resp) => {
    setTimeout(() => {
        resp.render('about', {
            message: "Create for the training purpose",
            currentYear: new Date().getFullYear()
        })
    }, 2000)
    
})

app.get("/blogs",async (req, resp) => {

    var url = "https://jsonplaceholder.typicode.com/posts"
    var blogsdata = []
    try {

        var response = await axios.get(url)
        blogsdata = response.data;
        
    } catch (error) {
        
    }

    resp.render('blogs', {
        blogs: blogsdata
    })
})

app.listen(8080, () => {
    console.log("Express server started at port 8080 ....")
})
