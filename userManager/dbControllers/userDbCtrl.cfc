<cfcomponent>
    
	
	<cffunction name="getUsers" access="public" returntype="query">
		
		<cfquery datasource="userManagerDsn" name="local.qGetUsers">
			SELECT	* FROM users
		</cfquery>
		
		<cfreturn qGetUsers />
	</cffunction>
	
	<cffunction name="saveUser" access="public">
		
		<cfargument name="firstName" type="string">
		<cfargument name="middleName" type="string">
		<cfargument name="lastName" type="string">
		<cfargument name="phoneNumber" type="string">
		<cfargument name="regDate" type="string">
		
		<cfquery datasource="userManagerDsn" name="local.qSaveUser">
			INSERT INTO users (firstName, middleName, lastName, phoneNumber, regDate) 
			VALUES (
				<cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#firstName#" />,
                <cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#middleName#" />,
                <cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#lastName#" />,
                <cfqueryparam cfsqltype="CF_SQL_INTEGER" value="#phoneNumber#" />,
                <cfqueryparam cfsqltype="CF_SQL_DATE" value="#regDate#" />
				)
		</cfquery>
		
	</cffunction>
	
	<cffunction name="saveUserWithId" access="public">
		
		<cfargument name="id" type="string">
		<cfargument name="firstName" type="string">
		<cfargument name="middleName" type="string">
		<cfargument name="lastName" type="string">
		<cfargument name="phoneNumber" type="string">
		<cfargument name="regDate" type="string">
		
		<cfquery datasource="userManagerDsn" name="local.qSaveUserWithId">
			INSERT INTO users (id,firstName, middleName, lastName, phoneNumber, regDate) 
			VALUES (
				<cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#id#" />,
				<cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#firstName#" />,
                <cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#middleName#" />,
                <cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#lastName#" />,
                <cfqueryparam cfsqltype="CF_SQL_INTEGER" value="#phoneNumber#" />,
                <cfqueryparam cfsqltype="CF_SQL_DATE" value="#regDate#" />
				)
		</cfquery>
		
	</cffunction>
	
	<cffunction name="deleteUser" access="public">
		
		<cfargument name="index" type="string">
		
		<cfquery datasource="userManagerDsn" name="local.qDeleteUser">
			DELETE FROM users WHERE id=<cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#index#" />
		</cfquery>
		
	</cffunction>
	
	
</cfcomponent>