const express = require('express')
const bodyParser = require('body-parser')

// geeksforgeeks.org -> home page url
// localhost:8000

const app = express()
app.use(bodyParser.json())

// Handling the home page url -> localhost:8000
app.get('/', function(request, response) {
    // response.send('Welcome ;)')
    const data = {
        "content" : "Home Page",
        "text" : "Welcome ;)"
    }
    response.status(200).json(data)
})

app.get('/java', function(request, response) {
    // response.send('Java')
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

/**
 * request body
 * queries
 * params
 */
app.get('/login', function(request, response) {
    if(request.body.username === 'nithish' && request.body.password === 'nithishrayson'){
        response.json({
            "status" : "valid user"
        })
    }
    else{
        response.json({
            "status" : "invalid user"
        })
    }
})
const port = 8000
app.listen(port,function(){
    console.log(`Listening on port ${port}...`)
})
/*
* 200 ok
* 201 created
* 401 - unauthorized
* 
*
*/