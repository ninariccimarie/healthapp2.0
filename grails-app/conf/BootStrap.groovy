import grails.converters.JSON
import healthapp.User
import healthapp.UserInfo

class BootStrap {

    def init = { servletContext -> 
    	JSON.registerObjectMarshaller(UserInfo) { UserInfo user ->
			return [
				id: user.id,
				age: user.age,
				gender: user.gender,
				weight: user.weight,
				height: user.height,
				systolic: user.systolic,
				diastolic: user.diastolic,
				exercise: user.exercise,
			]
		}
		JSON.registerObjectMarshaller(User) { User user ->
			return [
				id: user.id,
				name: user.name
			]
		}
    }
    def destroy = {
    }
}
