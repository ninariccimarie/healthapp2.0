package healthapp
import org.springframework.http.HttpStatus

class UserController {

	static responseFormats = ['json']

    def userService

    def showAll() {
        def users = userService.fetchAllUsers()

        response.status = HttpStatus.OK.value()
        respond(users)
    }

    def create() {
        def requestUser = request.JSON

        def user = userService.createUser(requestUser.age, requestUser.gender, requestUser.weight, requestUser.height, requestUser.systolic, requestUser.diastolic, requestUser.exercise )
        response.status = HttpStatus.CREATED.value()
        respond(user)
    }

    def update(String userId) {
        def updateUser = request.JSON

        def user = userService.fetchUser(userId as Long)
        user = userService.updateUser(user, updateUser.age, updateUser.gender, updateUser.weight, updateUser.height, updateUser.systolic, updateUser.diastolic, updateUser.exercise)
        response.status = HttpStatus.OK.value()
        respond(user)
    }

    def show(String userId) {
        def user = userService.fetchUser(userId as Long)
        respond(user)
    }
}
