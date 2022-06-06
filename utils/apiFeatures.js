class APIFeatures{
  constructor(query,queryStr){
    
     this.query= query;
     this.queryStr = queryStr;

  }

  search(){
   // console.log(this.queryStr.location,"location")   // NEW york will be print

    console.log(this.queryStr,"this.queryStr")  //{ location: 'New York', size: 'King' }

  const location = this.queryStr.location ?{ // this is the location enter by the user
  address:{
      $regex:this.queryStr.location,
      $options:'i'

  }
} : {} //empty object


this.query = this.query.find({...location})  // spread operator placed the element one by one in object with order

//console.log(location,"location")
return this;
}

filter(){
    const removeField = ['location']
    const queryCopy = {...this.queryStr,}
//    console.log(...this.queryStr.location,'queryCopy')  == {
//     '0': 'N',      
//     '1': 'e',      
//     '2': 'w',      
//     '3': ' ',      
//     '4': 'Y',      
//     '5': 'o',
//     '6': 'r',
//     '7': 'k'
//   } 


//console.log(queryCopy,"queryCopy") = { location: 'New York', size: 'King' } queryCopy

     removeField.forEach(el =>delete(queryCopy[el]))
   //  console.log(queryCopy,"queryCopy") = { size: 'King' } queryCopy

   this.query = this.query.find(queryCopy);
   return this;
}


}

export default APIFeatures;