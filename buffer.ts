//% color=#0000ff
namespace MyBuffer {
    //% block="buffer with %x bytes"
    /**
     * Create a buffer making function.
     * @param x defines amount of bytes, eg: 16
     */
    export function makeBuffer (x: number) {
        return pins.createBuffer(x);
    }


    //% block="put string %x into %b"
    //% b.shadow="variables_get"
    /**
     * TODO: create a function to write string to buffer
     * @param x has string, eg: "Hello world"
     * @param b is buffer, eg: buff
     */
    export function pushString(x: string, b: Buffer) {
        let arr = [];
        for(let i = 0; i < x.length; i++) {
            arr.push(x.charCodeAt(i));
            b.setNumber(NumberFormat.Int8LE, i, x.charCodeAt(i));
        }
    }

    //% block="get string from %b"
    //% b.shadow="variables_get"
    /**
     * TODO: create a function to return the string
     * @param b is buffer, eg: buff
     */
    export function getString(b: Buffer) {
        return b.toString()
    }
}