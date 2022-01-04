const date = require('../getDate.js');

exports.getMainPage = (request,response)=>{
    let time = date.getDate();
    response.render('index',{CurrentTime: time});
}