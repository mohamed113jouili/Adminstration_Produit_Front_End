export interface ResponseAuth {
    success?: boolean
    error:Error;

}

export interface Error {
   
    code?:number
    type?:string
    info?:string


}


/*{
   "success":false,
   "error":{
      "code":601,
      "type":"missing_query",
      "info":"Please specify a valid location identifier using the query parameter."
   }
}*/ 