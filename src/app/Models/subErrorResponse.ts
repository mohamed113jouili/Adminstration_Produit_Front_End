


export interface SubErrorResponse {
   

    status?: string,
    timestamp?: Date,
    message? :string,
    type?: number,
    comment?: string,
    name?: string,
    subErrors? :Array<string>

}

/*{
    "status": "BAD_REQUEST",
    "timestamp": "08-12-2020 09:27:17",
    "message": "could not execute statement",
    "type": 100,
    "comment": "duplicate cap_name",
    "name": "cap_name"



    {
    "status": "BAD_REQUEST",
    "timestamp": "08-12-2020 09:34:04",
    "message": "could not execute statement",
    "type": 100,
    "comment": "duplicate pro_name",
    "name": "pro_name"
}
}



{
    "status": "BAD_REQUEST",
    "timestamp": "08-12-2020 09:39:21",
    "message": "could not execute statement",
    "type": 100,
    "comment": "duplicate clie_email",
    "name": "clie_email"
}


{
    "status": "BAD_REQUEST",
    "timestamp": "08-12-2020 09:40:24",
    "message": "could not execute statement",
    "type": 100,
    "comment": "duplicate clie_phone",
    "name": "clie_phone"
}

{
    "status": "BAD_REQUEST",
    "timestamp": "08-12-2020 09:48:33",
    "message": "Validation failed for argument [0] in public com.produit.dao.Client com.produit.web.ClientController.savePlayer(com.prod...",
    "type": 1,
    "comment": " Validation Error, type 1 validation form",
    "name": null,
    "subErrors": [
        "firstname : the size must be between 3 and 15",
        "firstname : cannot be empty "
    ]
}


{
    "status": "BAD_REQUEST",
    "timestamp": "08-12-2020 09:54:29",
    "message": "Validation failed for argument [0] in public com.produit.dao.Client com.produit.web.ClientController.savePlayer(com.prod...",
    "type": 1,
    "comment": " Validation Error, type 1 validation form",
    "name": null,
    "subErrors": [
        "firstname : the size must be between 3 and 15",
        "firstname : cannot be empty ",
        "email : must be a well-formed email address"
    ]
}
*/ 

