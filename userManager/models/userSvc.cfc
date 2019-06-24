component {
	
	
	public userManager.models.User[] function getUsers() {
		var users = [];
		var qUsers = new userManager.dbControllers.userDbCtrl().getUsers();
		for (var userQItem in qUsers) {
			var user = new userManager.models.User(
				id = userQItem.id,
				firstName = userQItem.firstName,
				middleName = userQItem.middleName,
				lastName = userQItem.lastName,
				phoneNumber = userQItem.phoneNumber,
				regDate = userQItem.regDate
			);
			arrayAppend(users, user);
		}
		
		return users;
	}
	
	public function saveUser(required string userJson){
		var user = deserializeJSON(userJson);
		var firstName = user.firstName;
		var middleName = user.middleName;
		var lastName = user.lastName;
		var phoneNumber = user.phoneNumber;
		var regDate = user.regDate;
		new userManager.dbControllers.userDbCtrl().saveUser(firstName,middleName,lastName,phoneNumber,regDate);
	}
	
	public function saveUserWithId(numeric id, required string userJson){
		var user = deserializeJSON(userJson);
		var firstName = user.firstName;
		var middleName = user.middleName;
		var lastName = user.lastName;
		var phoneNumber = user.phoneNumber;
		var regDate = user.regDate;
		new userManager.dbControllers.userDbCtrl().saveUserWithId(id,firstName,middleName,lastName,phoneNumber,regDate);
	}
	
	public function deleteUser(required numeric index){
		new userManager.dbControllers.userDbCtrl().deleteUser(index);
	}
	
}