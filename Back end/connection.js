const mongoose=require ('mongoose');
mongoose.connect('mongodb+srv://josmykj3267:josmyJohn2323@cluster0.coke3i5.mongodb.net/movieprojectDB?retryWrites=true&w=majority&appName=Cluster0')
.then((res)=>{
    console.log('DB connected');
})
.catch((res)=>{
    console.log('DB not connected');
})