import grails.converters.JSON
import healthapp.User
import healthapp.UserInfo

class BootStrap {

    def init = { servletContext -> 
    	JSON.registerObjectMarshaller(UserInfo) { UserInfo user ->
			return [
				age: user.age,
				weight: user.weight,
				height: user.height,
				systolic: user.systolic,
				diastolic: user.diastolic,
				exercise: user.exercise,
				dateCreated: user.dateCreated.format('yyyy-MM-dd')
			]
		}
		JSON.registerObjectMarshaller(User) { User user ->
			return [
				id: user.id,
				name: user.name,
				gender: user.gender.name()
			]
		}
    }
    def destroy = {
    }
}
