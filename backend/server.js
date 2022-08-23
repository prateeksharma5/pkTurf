const app =require('./app')
const {connectDatabase}=require('./config/database')
require('dotenv').config({path:'backend/config/config.env'})
connectDatabase();
app.listen(process.env.PORT,()=>{
    console.log(`Server running on port:${process.env.PORT} `)
})