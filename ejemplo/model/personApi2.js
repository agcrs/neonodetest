var express = require('express');
var neo4j = require('neo4j');

var db = new neo4j.GraphDatabase('http://localhost:7474');

var testQuery = exports.testQuery = function(){

  var query = [
    'MATCH (n)',
    'RETURN n'
  ].join('\n');

  db.query(query, {}, function(err, results){
    if(err) throw err;

    var persons = results.map(function (result) {
      return result['n'];
    });

    console.log(persons); // delivers an array of query results
    console.log("-------------------------------------------------");

    return persons;
  });
}

/*var testQuery = exports.testQuery = function(){
  db.readNode(1, function(err, node){
    if(err) throw err;

    console.log(node.name);
    console.log(node._id);
  });
}*/
