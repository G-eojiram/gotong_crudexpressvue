import db from "../config/database.js"; // using the db

//get all list from database
export const getLists = (result) =>{
    db.query("SELECT * FROM students", (err, results) =>{
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

//get student by id from database
export const getListByID = (id, result) => {
    db.query("SELECT * FROM students WHERE id = ?", [id],(err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
};

//insert new student to database
export const insertNew = (data, result) => {

    const insertQuery = "INSERT INTO students(firstname, lastname, course, birthday, age, allowance)" +
                        "VALUES(?,?,?,?,?,?)";
    db.query(insertQuery,
        [data.firstname, data.lastname, data.course, data.birthday, data.age, data.allowance], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    })
};

// update student by id to database
export const updateByID = (data, id, result) => {
    const updateQuery = "UPDATE students SET firstname = ?, lastname = ?, course = ?, birthday = ?, age = ?, allowance = ? WHERE students.id = ?";

    db.query(updateQuery,
        [data.firstname, data.lastname, data.course, data.birthday, data.age, data.allowance, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

// delete by id to database
export const deleteByID = (id, result) => {
    db.query("DELETE FROM students WHERE id = ?", [id],(err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
};