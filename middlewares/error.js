import ErrorHandler from "../utils/errorHandler";



export default (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500; //if the error don't have any status code then it will put the code 500 to it
      
    let error = {...err} // it will spread the complete error in it

    error.message =  err.message

    //wrong mongoos object id
    if(err.name=='CastError'){
        const message = `Resource not found. Invalid ${err.path}`
        error = new ErrorHandler(message,400);
    }

    //Handling mongoose Validation error
    if(err.name=='ValidationError'){
    const message = Object.values(err.errors).map(value => value.message); // we picking all the values which is missing in body and left the keys
    error = new ErrorHandler(message, 400);

    }

    res.status(err.statusCode).json({
        succes:false,
        error,
        message:error.message,
        stack:error.stack
    })
}