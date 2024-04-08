// serverless function can act as your backend.
// Import the data.json
const progData = require('../data.json');
// handler function
exports.handler = async()=>{
    return{
        statuscode: 200,
        body: JSON.stringify(progData)
    };
};