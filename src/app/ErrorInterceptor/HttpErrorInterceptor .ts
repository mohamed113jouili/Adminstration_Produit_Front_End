import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubErrorResponse } from '@app/Models/subErrorResponse';
import { ErrorService } from '@app/Services/error.service';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class HttpErrorInterceptor implements HttpInterceptor {
    sub: SubErrorResponse = {};
    serror: string = "{}";
    constructor(private errorService: ErrorService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error

                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        this.serror = JSON.stringify(error.error);

                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
                    }
                    window.alert(errorMessage);
                    return throwError(errorMessage);
                })
            )
    }



    //convert 
    parseErrorBlob(err: HttpErrorResponse): Observable<any> {
        const reader: FileReader = new FileReader();
        const obs = new Observable((observer: any) => {
            reader.onloadend = (e) => {
                observer.error(new HttpErrorResponse({
                    ...err,
                    error: JSON.parse(reader.result as string),
                }));
                observer.complete();
            };
        });
        reader.readAsText(err.error);
        return obs;
    }

}