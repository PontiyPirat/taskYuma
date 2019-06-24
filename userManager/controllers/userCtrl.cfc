component {
	
	
	remote userManager.models.User[] function getUsers() returnformat="JSON" {
		return new userManager.models.userSvc().getUsers();
	}
	
	
	remote function saveUser(required string userJson){
		new userManager.models.userSvc().saveUser(userJson);
	}
	
	remote function deleteUser(required numeric index){
		new userManager.models.userSvc().deleteUser(index);
	}
	
	remote function updateUser(required numeric id, required string userJson){
		new userManager.models.userSvc().deleteUser(id);
		new userManager.models.userSvc().saveUserWithId(id,userJson);
	}
	
	
}