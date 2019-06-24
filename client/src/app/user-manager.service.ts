import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { map } from "rxjs/operators";
import { User } from "./models/user.model";

@Injectable({
	providedIn: "root"
})
export class UserManagerService {
	
	constructor(private httpClient: HttpClient) {
	}
	
	getUsers() {
		return this.httpClient
			.post("/userManager/controllers/userCtrl.cfc", { method: "getUsers"})
			.pipe(map(data => {
				if (!(data instanceof Array)) {
					throw new Error(`data is not a valid array: '${data}'`);
				}
				return data as User[];
			}));
	}
	
	saveUser(user: User) {
		return this.httpClient
			.post("/userManager/controllers/userCtrl.cfc", { method: "saveUser", userJson: user});
	}

	updateUser(id:number,user:User){
		return this.httpClient
			.post("/userManager/controllers/userCtrl.cfc", { method: "updateUser", id: id, userJson: user});
	}

	deleteUser(id){
		return this.httpClient
			.post("/userManager/controllers/userCtrl.cfc", { method: "deleteUser", index: id});
	}

	
}
