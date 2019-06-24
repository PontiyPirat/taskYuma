import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserEditComponent } from "./containers/user-edit.component";
import { UserListComponent } from "./containers/user-list.component";

const routes: Routes = [
	{
		path: "user",
		children: [
			{ path: "list", component: UserListComponent },
			{
				path: ":userId",
				children: [
					{ path: "edit/:id", component: UserEditComponent },
					{ path: "create", component: UserEditComponent },
				]
			},
			{ path: "**", redirectTo: "list" }
		]
	},
	{ path: "**", redirectTo: "user" }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {
}
