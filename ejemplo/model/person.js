var express = require('express');
var neo4j = require('node-neo4j');

var db = new neo4j('http://neo4j:383137@localhost:7474');

var testQuery = exports.testQuery = function(){
  db.cypherQuery("MATCH (n) RETURN n LIMIT 100", function(err, result){
    if(err) throw err;

    console.log(result.data); // delivers an array of query results
    console.log("-------------------------------------------------");
    console.log(result.columns); // delivers an array of names of objects getting returned

    for (node in result.data){
      console.log("-----------");
      console.log(node);
      console.log("-----------");
    }

    return result;
  });
}

/*var testQuery = exports.testQuery = function(){
  db.readNode(1, function(err, node){
    if(err) throw err;

    console.log(node.name);
    console.log(node._id);
  });
}*/
