"use strict";

const output = {
    home : (req,res) => {
        res.render("home/index");
    },
    login : (req,res) => {
        res.render("home/login");
    },
};

const process = {
    login : (req,res) => {
        console.log("로그인 프로세스", req.body);
    },
};

module.exports = {
    output,
    process,
};