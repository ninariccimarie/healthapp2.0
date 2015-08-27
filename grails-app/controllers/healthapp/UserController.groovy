package healthapp

import org.springframework.http.HttpStatus
import healthapp.exception.UserNotFoundException
import healthapp.type.Gender

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

        def user = userService.createUser(requestUser.name, (requestUser.gender as Gender))
        response.status = HttpStatus.CREATED.value()
        respond(user)
    }

    def showUserInfo(String userId) {
        def user = userService.fetchUserById(userId as Long)

        def userInfo = userService.fetchUserInfo(user)
        response.status = HttpStatus.OK.value()
        respond(userInfo)
    }

    def addUserInfo(String userId) {
        def user = userService.fetchUserById(userId as Long)

        def requestUserInfo = request.JSON

        def userInfo = userService.addUserInfo(user, requestUserInfo.age, requestUserInfo.weight, requestUserInfo.height, requestUserInfo.systolic, requestUserInfo.diastolic, requestUserInfo.exercise)
        respond(userInfo)
    }

    def handleUserNotFound(UserNotFoundException e) {
        response.status = HttpStatus.NOT_FOUND.value()
        respond(code: 'USER_NOT_FOUND')
    }
}
