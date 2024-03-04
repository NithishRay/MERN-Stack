const express = require('express')

const app = express()

app.get('/', function(request, response) {

    const data = {
        "content" : "Home Page",
        "text" : "Welcome ;)"
    }
    response.status(200).json(data)
})

app.get('/java', function(request, response) {
    const data = {
        "content" : "About Java",
        "text" : "Java is an Object Oriented Programming Language"
    }
    response.status(200).json(data)
})

app.get('/javascript', function(request, response) {
    response.status(200).json({
        "content" : "About JavaScript",
        "text" : "JavaScript is a client-side language"
    })
})

app.listen(8000)