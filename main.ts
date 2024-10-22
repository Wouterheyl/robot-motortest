radio.onReceivedNumber(function (receivedNumber) {
    I = receivedNumber
})
let I = 0
radio.setGroup(0)
I = 99
basic.forever(function () {
    if (I == 4) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 10)
    } else if (I == 3) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -10)
    } else if (I == 2) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
    } else if (I == 1) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 90)
    } else if (I == 5) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 10)
    } else if (I == 6) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -10)
    } else {
        I = 0
    }
})
