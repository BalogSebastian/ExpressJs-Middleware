const express = require("express")
const app = express()

app.use(logger)

app.get("/", auth, (req, res) => {
    console.log("Home Page")
    res.send('Home Page')

})

app.get("/users", auth,( req, res) => {
    console.log(`user is admin ${req.admin}`)
    console.log("Users Page")
    res.send("Users Page")
})

function logger(req, res, next) {
    console.log(req.originalUrl)// this will print out the /users?admin=true
    next()
}

function auth(req, res, next) {
    if ( req.query.admin == 'true') {
        req.admin = true
        next()
    } else {
        res.send('No AUTH') // if we write down this in the link tag at the top
        // ?admin=true this after localhost:/users?admin=true than we get Users Page 
        //else we get No Auth
    }
    // console.log('Auth')
    // next()
}

app.listen(3001) 