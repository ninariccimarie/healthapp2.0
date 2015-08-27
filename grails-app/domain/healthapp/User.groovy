package healthapp

class User {
	Integer age
	String gender
	Integer weight
	Integer height
    Integer systolic
    Integer diastolic
    Double exercise

	Date dateCreated = new Date()

    static constraints = {
    	age blank:false
    	gender blank:false
    	weight blank:false
    	height blank:false
        systolic blank:false
        diastolic blank:false
        exercise blank:false
    }
}
