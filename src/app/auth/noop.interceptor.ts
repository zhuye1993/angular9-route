import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
    constructor (private router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    // 拦截请求,给请求头添加token
    let url = req.url
    let token = document.cookie && document.cookie.split("=")[1]
    // 登录请求排除在外
    // if (!url.includes('login')) {
        // console.log(1111)
        req = req.clone({
            url,
            headers: req.headers.set('Authorization', token)
        })
    // }
    return next.handle(req).pipe(
        tap(
         event => {
          if (event instanceof HttpResponse) {
           console.log(event);
           if (event.status >= 500) {
            // 跳转错误页面
           }
          }
         },
         error => {
          // token过期 服务器错误等处理
        //   this.router.navigate(['/login']);
         })
       );
  }
}