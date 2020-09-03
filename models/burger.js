const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(burger_name, cb) {
    orm.insertOne(burger_name, function(res) {
      cb(res);
    });
  },
  updateOne: function(state, good_id, cb) {
    orm.updateOne(state, good_id, function(res) {
      cb(res);
    });
  },
  
};

module.exports = burger;