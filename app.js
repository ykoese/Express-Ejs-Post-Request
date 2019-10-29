const express= require('express');
const app= express();
const port= process.env.PORT ||8001;

app.set('view engine', 'ejs');//ejs added
app.use(express.urlencoded({extended:true}));

var friends=['mrt', 'lily', 'monik', 'ali', 'hüso'];
//below root route
app.get('/', (req, res)=>{
    res.render('home');
});

app.get('/friends', (req, res)=>{
    
    res.render('friends', {friends:friends});
});

app.post('/addfriends', (req, res)=>{
    var newFriend=req.body.newfriend;
    friends.push(newFriend);
    
    /* res.send('this is post route'); */// bunu kullaninca addfriende geliyoz tekrar friends dönüyoriz bu nedenle res.redirect kullanmaliyiz
    res.redirect('/friends');
});


app.listen(port, function(){
    console.log(`server started on ${port}`);
})