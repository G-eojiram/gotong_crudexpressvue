// importing the functions to use from the models
import {
    getLists,
    getListByID,
    insertNew,
    updateByID,
    deleteByID,
} from "../models/studentModel.js";

export const showLists = (req, res) => {
    getLists((err, results) =>{
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

export const showListByID = (req, res) => {
    getListByID(req.params.id, (err, results) =>{
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

export const createStudent = (req, res) => {
    const data = req.body;
    insertNew(data, (err, results) =>{
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

export const updateStudentByID = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateByID(data, id, (err, results) =>{
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

export const deleteStudentByID = (req, res) => {
    const id = req.params.id;
    deleteByID(id, (err, results) =>{
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}