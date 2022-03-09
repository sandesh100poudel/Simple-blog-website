const express =require("express");
const bodyParser= require("body-parser");
const ejs=require("ejs");
 const _= require("lodash");
const homeStar="hello is great to be part of this eksiting inveroment ";
const contactabout="hey its all about the detail information about you and you are doing great in your life hopping for the great";
const aboutcontact="heshoieo ihsedo";

const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
let posts= [];


app.get("/", function(req, res){
    res.render("home.ejs",{ 
        kindofparagraph:homeStar,
        posts:posts
    });
});
app.get("/about",function(req,res){
    res.render("about.ejs",{
        kindofabout:contactabout,
   
});
});
app.get("/contact", function(req, res){
    res.render("contact.ejs",{
        kindofcontack:aboutcontact
    });
});
app.get("/compose", function(req, res){
    res.render("compose.ejs"
        
)});
 app.post("/compose", function(req, res){
    
const post={
     
     vill:req.body.hello,
     eill:req.body.Post
};
posts.push(post);
res.redirect("/");



 });


app.get("/posts/:postName",function(req,res){
    const requestedTittle = _.lowerCase(req.params.postName);
posts.forEach(function(post){
    const storedTittle =_.lowerCase(post.vill);

    if (storedTittle===requestedTittle){
       res.render("post",{
           vill:post.vill,
           eill:post.eill

       });
        }
    

});

});






app.listen(3000, function(){
    console.log("your server is running fine");
});