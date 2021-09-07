const { promises } = require("stream");

var myFirstDate= new Promise((resolve,reject)=>{
    var man="Kirannnn";
    if(man=="kiran")
    {
        reject("you dont care for me");
    }
    else{
        resolve("life is important than job");
    }
})

myFirstDate.then(result=>
    {
console.log(result);
    }).catch(err=>
        {
            console.log(err);
        });
        console.log("yeyyyyyyy");