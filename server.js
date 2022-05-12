//express to run server and routes
const express = require('express')

//start an instance of the app
const app = express();

//dependencies
const bodyParser = require('body-parser')
/*middleware*/
//configure express to use body-parser as middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//initialize the main project folder
app.use(express.static('website'))

const port = 8000;
//spin up the server
const server = app.listen(port, listening);
//callback to debug
function listening(){
	console.log("server running");
	console.log(`running on localhost: ${port}`);

};

app.get('/all', function (req, res) {
	res.send("'hello world'");
})