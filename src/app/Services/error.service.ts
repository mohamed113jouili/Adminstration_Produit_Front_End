import { Injectable } from '@angular/core';
import { SubErrorResponse } from '@app/Models/subErrorResponse';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private _listSubjectValidationError = new BehaviorSubject<string[]>([]);

  private _subjectDuplicateError = new BehaviorSubject<string>("");

  private _objectError = new BehaviorSubject<SubErrorResponse>({});

  private _subjectMessageError = new BehaviorSubject<string>("");


  public readonly message;
 


  constructor() { }








  //getter and setter 


toObject(){

  this.objectError.next(JSON.parse(this.subjectMessageError.value+""));
  return this.objectError.value.message
}



  public get listSubjectValidationError() {
    return this._listSubjectValidationError;
  }
  public set listSubjectValidationError(value) {
    this._listSubjectValidationError = value;
  }

  public get subjectDuplicateError() {
    return this._subjectDuplicateError;
  }
  public set subjectDuplicateError(value) {
    this._subjectDuplicateError = value;
  }
  public get objectError() {
    return this._objectError;
  }
  public set objectError(value) {
    this._objectError = value;
  }
  public get subjectMessageError() {
    return this._subjectMessageError;
  }
  public set subjectMessageError(value) {
    this._subjectMessageError = value;
  }
}
