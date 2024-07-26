const express=require('express')
const cors=require('cors');
const app=new express();
const PORT=4000;
// connect the connection .js to server file
require('./connection');
const MovieData=require('./model/MovieData')


app.use(express.json());
app.use(cors());
app.post('/new-movie',async(req,res)=>{
    try{
        var item=req.body;
        const dataitem=new MovieData(item);
        const savedata=await dataitem.save();
        res.send('post successful');
    }


    catch(error){
        console.log(error);
    }
})
// API endpoint to fetch data from DB
app.get('/movies',async(req,res)=>{
    try{
        const data=await MovieData.find();
        res.send(data);
    }
    catch(error){
        console.log("Error Occurs");

    }

})
// API endpoint for deleting the movie document
app.delete('/movieremoval/:id',async(req,res)=>{
    try{
        await MovieData.findByIdAndDelete(req.params.id);
         res.send('Deleted Successfully');
    }
    catch(error){
        console.log(error);

    }
})
// API endpoint for updating movie document
app.put('/movie-updation/id:',async(req,res)=>{
    try{
        await MovieData.findByIdAndUpdate(req.params.id,req.body)
        res.send("Updated Successfully")
    }
    catch(error){
        console.log(error)
    }

})
// checking whether the server is live or not
app.listen(PORT,()=>{
    console.log("server is running on port Number:4000");


})