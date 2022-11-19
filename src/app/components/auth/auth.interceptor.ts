import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { exhaustMap, Observable, take } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private _authService: AuthService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this._authService.user.pipe(
            take(1),
            exhaustMap(user =>{
                if(!user){
                    return next.handle(req);
                }
                else{
                    const modifiedReq= req.clone({
                        params: new HttpParams().set('auth', user.token)
                    })
                    return next.handle(modifiedReq);
                }
                
              })
        )    
    }
}