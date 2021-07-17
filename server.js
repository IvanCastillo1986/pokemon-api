const app = require("./app.js")

require("dotenv").config()

const PORT = process.env.PORT
console.log(PORT)

app.listen(3006, () => {
    console.log("Listening on PORT 3006")
})
