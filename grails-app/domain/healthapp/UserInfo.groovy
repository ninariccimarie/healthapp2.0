package healthapp

import java.math.RoundingMode

class UserInfo {
    int age
    int weight
    int height
    int systolic
    int diastolic
    float exercise

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

    float getBmi() {
        float bmi = (weight / (height * height)) * 703
        return bmi.round(2)
    }

    float getBmr() {
        float bmr

        if (owner.gender == 'MALE') {
            bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
        } else {
            bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
        }
        return bmr.round(2)
    }

    float getDkr() {
        float dkr = bmr * exercise;
        return dkr.round(2)
    }

}
