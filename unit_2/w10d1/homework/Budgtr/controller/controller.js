const data = require("../models/budget.js")

const bankAccount = (data) => {
    let allAmount = []
    data.forEach(el=> {
        allAmount.push(el.amount)
    })
    let totalAmount =allAmount.reduce((acc, curr) => {acc += curr; return acc})
    console.log(totalAmount)
    return totalAmount;
}
const indexPage = (req,res) => {
    let totalAmount = bankAccount(data)
    console.log(totalAmount)
    res.render("index.ejs",{data,totalAmount})
}

const showPage = (req,res)=> {
    let id= parseInt(req.params.index);
    let selectedData = data[id]
    console.log(id)
    console.log(selectedData)
    res.render("show.ejs", {selectedData,id})
}

const newPage = (req,res)=> {
    res.render('new.ejs',{data: data})
}

const postPage = (req,res)=> {
    req.body.amount = parseInt(req.body.amount)
    data.push(req.body);
    res.redirect('/budgets');
}

module.exports = {
    indexPage,
    showPage,
    newPage,
    postPage,
}