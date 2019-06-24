import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserEditComponent } from "./containers/user-edit.component";
import { UserListComponent } from "./containers/user-list.component";
import { HttpInterceptorService } from "./http-interceptor.service";

@NgModule({
	declarations: [
		AppComponent,
		UserListComponent,
		UserEditComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		MDBBootstrapModule.forRoot()
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true, },
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {
}
