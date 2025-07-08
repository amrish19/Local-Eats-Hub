const express =require('express');
const app=express();
const port=4000;
const cors = require('cors');

app.use(cors());
app.use(express.json()); // always use it to type cast the data from frontend else it show undefined 




app.get('/',(req,res)=>{
    res.send("hello");
});






app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log(data.Email);
    console.log(data.text);
    

    // handler function for sending email by node mailer 



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
    to:`${data.Email}`,
    subject:data.Subject,
    text:data.text,
};

transporter.sendMail(mailoptions,function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log("sent Sucessfully",info.response);
        res.send({ status: 'success', receivedData: data }); 
    }
});





   // res.send({ status: 'success', receivedData: data });     // sending message to front end that sucessfully confirmed



  });


app.listen(port,()=>{
    console.log(`App is listening on ${port}`);
})
