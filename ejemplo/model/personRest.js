//Let’s load the request module
var request = require("request");

var host = 'localhost';
var port = 7474;
var httpUrlForTransaction = 'http://' + host + ':' + port + '/db/data/transaction/commit';


var cypherQuery = function(query, params, callback){
  request.post({
    uri: httpUrlForTransaction,
    json: {statements: [{statement: query, parameters: params}]},
    function(err, res) { callback(err, res.body)}
  });
}

var query = "MATCH (n) RETURN n LIMIT 100";
var params = {};
var callback = function(err,data) {
  console.log(JSON.stringify(data));
  console.log(data);
};

var testQuery = exports.testQuery = function(){
  cypherQuery(query, params, callback);
}
