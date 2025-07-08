const nodemailer=require("nodemailer");


const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"nterminator14@gmail.com",
        pass:"maltwmyplqufwtze",
    }
});

const mailoptions={
    from:"nterminator14@gmail.com",
    to:"aslaankhan640@gmail.com",
    subject:"Order Confirmation",
    text:" Successfully recieved your order delivering shortly",
};

transporter.sendMail(mailoptions,function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log("sent Sucessfully",info.response);
    }
});