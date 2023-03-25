const neo4j = require("neo4j-driver");
const parser = require("parse-neo4j");
const con = require("./connector");
const queryStore = require("./query_store");

const driver = neo4j.driver(con.HOST, neo4j.auth.basic(con.USER, con.PASSWORD));
const session = driver.session();

// Get List Account
exports.getAllCheck = (res, next, callback) => {
  let result = session.run(queryStore.getAllCheck, {}).catch((error) => {
    console.log(error);
  });
  result
    .then(parser.parse)
    .then(function (parsed) {
      callback(parsed);
    })
    .catch(function (parseError) {
      console.log(parseError);
    });
};


//Post a Person
exports.addCheckData = (data, res, next, callback) => {
  let result = session
    .run(queryStore.postCheck, {code: data.data.code, name: data.data.name})
    .catch((error) => {
      console.log(error);
    });
  result
    .then(parser.parse)
    .then(function (parsed) {
      callback(parsed);
    })
    .catch(function (parseError) {
      console.log(parseError);
    });
};

// Get List Account
exports.deleteCheckById = (id, res, next, callback) => {
  let result = session.run(queryStore.deleteCheckById, {id: parseInt(id)}).catch((error) => {
    console.log(error);
  });
  result
    .then(parser.parse)
    .then(function (parsed) {
      callback(parsed);
    })
    .catch(function (parseError) {
      console.log(parseError);
    });
};



// item
exports.getCheckItem = (res, next, callback) => {
  let result = session.run(queryStore.getCheckItem, {}).catch((error) => {
    console.log(error);
  });
  result
    .then(parser.parse)
    .then(function (parsed) {
      callback(parsed);
    })
    .catch(function (parseError) {
      console.log(parseError);
    });
};

exports.getCheckItemById = (id, res, next, callback) => {
  let result = session.run(queryStore.getCheckItemById, {id: id}).catch((error) => {
    console.log(error);
  });
  result
    .then(parser.parse)
    .then(function (parsed) {
      callback(parsed);
    })
    .catch(function (parseError) {
      console.log(parseError);
    });
};

exports.addCheckItemData = (data, res, next, callback) => {
  let result = session
    .run(queryStore.postCheckItem, {idCheck: data.data.idCheck, itemName: data.data.itemName})
    .catch((error) => {
      console.log(error);
    });
  result
    .then(parser.parse)
    .then(function (parsed) {
      callback(parsed);
    })
    .catch(function (parseError) {
      console.log(parseError);
    });
};

exports.getRelationItem = (id, itemId, res, next, callback) => {
  let result = session.run(queryStore.getRelationCheck, {idCheck: id, idItem: itemId }).catch((error) => {
    console.log(error);
  });
  result
    .then(parser.parse)
    .then(function (parsed) {
      callback(parsed);
    })
    .catch(function (parseError) {
      console.log(parseError);
    });
};


exports.updateStatus = (id, itemId, res, next, callback) => {
  let result = session.run(queryStore.updateStatusItem, {idCheck: id, idItem: itemId }).catch((error) => {
    console.log(error);
  });
  result
    .then(parser.parse)
    .then(function (parsed) {
      callback(parsed);
    })
    .catch(function (parseError) {
      console.log(parseError);
    });
};

exports.renameItem = (id,  itemName, itemId, res, next, callback) => {
  let result = session.run(queryStore.renameItem, {idCheck: id, idItem: itemId, itemName: itemName ? itemName : null}).catch((error) => {
    console.log(error);
  });
  result
    .then(parser.parse)
    .then(function (parsed) {
      callback(parsed);
    })
    .catch(function (parseError) {
      console.log(parseError);
    });
};

exports.deleteItem = (id, itemId, res, next, callback) => {
  let result = session.run(queryStore.deleteItem, {idCheck: id, idItem: itemId }).catch((error) => {
    console.log(error);
  });
  result
    .then(parser.parse)
    .then(function (parsed) {
      callback(parsed);
    })
    .catch(function (parseError) {
      console.log(parseError);
    });
};
