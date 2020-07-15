radio.onReceivedValue(function (name, value) {
    basic.clearScreen()
    id = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    led.plot(parseFloat(name) / 5, parseFloat(name) % 5)
    serial.writeValue("" + id + "_" + name, value)
})
let id = 0
radio.setGroup(99)
