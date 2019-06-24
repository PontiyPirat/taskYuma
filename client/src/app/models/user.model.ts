export interface User {
	userId: number;
	firstName: string;
	middleName: string;
	lastName: string;
	phoneNumber: number;
	regDate: string;
}

export enum UserFields{
	firstName = "Имя",
	secondName = "Фамилия",
	lastName = "Отчество",
	phoneNumber = "Номер телефона",
	regDate = "Дата регистрации"
}
