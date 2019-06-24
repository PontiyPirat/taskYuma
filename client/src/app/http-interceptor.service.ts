import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class HttpInterceptorService implements HttpInterceptor {
	
	constructor() {
	}
	
	
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let requestBody: string | undefined;
		
		if (request.body) {
			const requestBodyURLSearchParams = new URLSearchParams();
			for (const s in request.body) {
				if (request.body.hasOwnProperty(s) && request.body[ s ] != null && typeof request.body[ s ] !== "undefined") {
					requestBodyURLSearchParams.set(s, typeof request.body[ s ] === "object" ? JSON.stringify(request.body[ s ]) : request.body[ s ]);
				}
			}
			console.log(requestBodyURLSearchParams);
			requestBody = requestBodyURLSearchParams.toString();
		}
		
		const changedRequest = request.clone({
			url: request.url,
			headers: request.headers.set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
			body: requestBody
		});
		
		return next.handle(changedRequest);
	}
	
}
