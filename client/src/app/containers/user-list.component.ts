import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { User } from "../models/user.model";
import { UserFields } from "../models/user.model";
import { UserManagerService } from "../user-manager.service";

@Component({
	selector: "app-user-list",
	templateUrl: "./user-list.component.html",
	styles: []
})
export class UserListComponent implements OnInit {

	users$: Observable<User[]>;
	users: User[] = [];
	//название поля для фильтрации
	field: string = UserFields.firstName;
	//индекс поля для фильтрации(на единицу больше, т.к. не учитывается id)
	indexField: number = 1;

	constructor(private userManagerService: UserManagerService) {
	}

	ngOnInit() {
		this.users$ = this.userManagerService.getUsers();
		this.users$.subscribe(data => { this.users = data });
	}

	delete(index, userId) {
		//удаление визуальное и из базы данных
		this.users.splice(index, 1);
		this.userManagerService.deleteUser(userId).subscribe();
	}

	filter(event) {
		//вводимый текст
		let text = event.target.value.toUpperCase();
		//строчки в таблице для отдельных пользователей
		let trTags = document.getElementById("myTable").getElementsByTagName("tr");

		for (let i = 1; i < trTags.length; i++) {
			let thTags = trTags[i].getElementsByTagName("th")[this.indexField];
			let thText = thTags.textContent || thTags.innerText;
			if (thText.toUpperCase().indexOf(text) > -1) {
				trTags[i].style.display = "";
			  } else {
				trTags[i].style.display = "none";
			  }
		  }
	}

	keys(){
		return Object.values(UserFields);
	}

	selectField(index){
		this.field = Object.values(UserFields)[index];
		this.indexField = index+1;
	}


}
