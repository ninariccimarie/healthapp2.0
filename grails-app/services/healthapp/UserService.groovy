package healthapp

import grails.transaction.Transactional
import healthapp.exception.UserNotFoundException
import healthapp.type.Gender

@Transactional
class UserService {

    def createUser(String name, Gender gender) {
        def user = new User(name: name, gender: gender)
        user.save()
    }

    def fetchAllUsers() {
        User.list()
    }

    def fetchUserById(Long id) {
        def user = User.get(id)

    	if (user) {
    		return user
    	} else {
    		throw new UserNotFoundException()
    	}
    }

    def fetchUserInfo(User user) {
        UserInfo.findAllByOwner(user)
    }

    def addUserInfo(User user, Integer updateAge, Integer updateWeight, Integer updateHeight, Integer updateSystolic, Integer updateDiastolic, Double updateExercise) {
        def userInfo = new UserInfo(owner: user)
        userInfo.age = updateAge
        userInfo.weight = updateWeight
        userInfo.height = updateHeight
        userInfo.systolic = updateSystolic
        userInfo.diastolic = updateDiastolic
        userInfo.exercise = updateExercise
        userInfo.save()
    }
}
