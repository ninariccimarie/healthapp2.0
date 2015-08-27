package healthapp

class UserInfo {
    Integer age
    String gender
    Integer weight
    Integer height
    Integer systolic
    Integer diastolic
    BigDecimal exercise

    Date dateCreated

    static belongsTo = [user: User]

    static constraints = {
        age blank:false
        gender blank:false
        weight blank:false
        height blank:false
        systolic blank:false
        diastolic blank:false
        exercise blank:false
    }

    static mapping = {
        autoTimestamp true
    }

}
