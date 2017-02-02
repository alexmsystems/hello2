import { ExceptionHandler } from '@angular2/src/core/facade/exceptions';
import { Response } from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomExceptionHandler {
    constructor() {
    }

    call(error, stackTrace = null, reason = null) {
        if (error instanceof Response) {
            alert('oh dear, an HTTP error occurred');
        } else { 
            alert('unhandled error');  
        }
    }
}