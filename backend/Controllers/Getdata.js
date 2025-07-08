const exphandler=require("express-async-handler");

const send = exphandler(async (req,res)=>{
    const {email,subject,text}=req.body;
    console.log(email,subject,text);
});

module.exports={send};