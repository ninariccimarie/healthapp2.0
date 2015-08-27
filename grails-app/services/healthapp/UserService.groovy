package healthapp

import grails.transaction.Transactional

@Transactional
class UserService {

    def createUser(Integer age, String gender, Integer weight, Integer height, Integer systolic, Integer diastolic, Double exercise ) {
    	def user = new User(age:age, gender:gender,weight:weight,height:height,systolic:systolic,diastolic:diastolic,exercise:exercise)
    	user.save()
    }

    def fetchAllUsers() {
    	User.list()
    }

    def fetchUser(Long id) {
    	def user = User.get(id)

    	if (user) {
    		return user
    	} else {
    		render "user not found"
    	}
    }

    def updateUser(User user, Integer updateAge, String updateGender, Integer updateWeight, Integer updateHeight, Integer updateSystolic, Integer updateDiastolic, Double updateExercise) {
        user.age = updateAge
        user.gender = updateGender
        user.weight = updateWeight
        user.height = updateHeight
        user.systolic = updateSystolic
        user.diastolic = updateDiastolic
        user.exercise = updateExercise
        user.save()
    }
}
