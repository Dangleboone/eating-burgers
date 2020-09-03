const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    const arr = [];


    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

const tableName = "burgers";

const orm = {

    selectAll: function (tableName, callback) {
        const s = "SELECT * FROM " + tableName;

        connection.query(s, function (err, result) {
            callback(result);
        });
    },

    insertOne: function (burger_name, callback) {
        const s =
            "INSERT INTO burgers (burger_name, devoured) VALUES ('" +
            `${burger_name}` +
            "',false)";

        console.log(s);
        connection.query(s, [`${burger_name}`], function (err, result) {
            callback(result);
        });
    },

    updateOne: function (status, condition, callback) {

        let s = "UPDATE " + tableName + " SET "
        s += status;
        s += " WHERE ";
        s += condition;
        console.log(condition);
        connection.query(s, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
};

module.exports = orm;