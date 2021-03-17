let buff = MyBuffer.makeBuffer(47)
basic.pause(1000)
serial.redirect(
SerialPin.P14,
SerialPin.P15,
BaudRate.BaudRate9600
)
serial.writeLine("shw::Hello World")
