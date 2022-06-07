const app = require("express")()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json())

app.use("/", require("./routes"))
app.listen(3000)