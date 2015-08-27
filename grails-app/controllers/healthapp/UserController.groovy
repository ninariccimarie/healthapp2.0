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

        def user = userService.createUser(requestUser.name)
        response.status = HttpStatus.CREATED.value()
        respond(user)
    }
}
