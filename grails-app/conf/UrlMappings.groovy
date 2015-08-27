class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')


        "/api/v1/user"(controller:"user") {
        	action = [GET: "showAll", POST: "create"]
        }

        "/api/v1/user/$userId/info"(controller:"user") {
            action = [GET: "showUserInfo", POST: "addUserInfo"]
        }
	}
}
