component accessors="true" {
	
	
	property name="id"	type="numeric"	getter="true" setter="true";
	property name="firstName"	type="string"	getter="true" setter="true";   
	property name="middleName"	type="string"	getter="true" setter="true";   
	property name="lastName"	type="string"	getter="true" setter="true";  
	property name="phoneNumber"	type="string"	getter="true" setter="true";  
	property name="regDate"	type="string"	getter="true" setter="true";    
	
	
	public userManager.models.User function init(required numeric id, required string firstName, 
	required string middleName, required string lastName, required numeric phoneNumber, required string regDate) {
		setId(arguments.id);
		setFirstName(arguments.firstName);
		setMiddleName(arguments.middleName);
		setLastName(arguments.lastName);
		setPhoneNumber(arguments.phoneNumber);
		setRegDate(arguments.regDate);
		
		return this;
	}
	
	
}