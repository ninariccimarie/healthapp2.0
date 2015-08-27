package healthapp

class UserInfo {
    Integer age
    Integer weight
    Integer height
    Integer systolic
    Integer diastolic
    BigDecimal exercise

    Date dateCreated

    static belongsTo = [owner: User]

    static constraints = {
        age blank:false
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
