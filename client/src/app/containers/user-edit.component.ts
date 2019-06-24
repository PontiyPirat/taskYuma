import { Component, OnInit } from "@angular/core";
import { User } from '../models/user.model';
import { UserManagerService } from "../user-manager.service";

import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
	selector: "app-user-edit",
	templateUrl: "./user-edit.component.html",
	styles: []
})
export class UserEditComponent implements OnInit {
	
	user = <User>{};
	private id: number;
	private subscription: Subscription;
	
	constructor(private userManagerService: UserManagerService,private activateRoute: ActivatedRoute) {
		//во внутреннюю переменную записывается id изменяемого пользователя
		this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
	}
	
	ngOnInit() {
		
	}

	save(){
		let date = new Date();
		this.user.regDate=date.getFullYear()+"."+date.getMonth()+"."+date.getDay();
		if(this.id!=null){
			this.userManagerService.updateUser(this.id,this.user).subscribe();
		}else{
			this.userManagerService.saveUser(this.user).subscribe();
		}
		
	}

	
	
}
