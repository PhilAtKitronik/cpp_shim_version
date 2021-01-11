/**
 * UBIT_VERSION MakeCode Package
 */
//% weight=100 color=#00A654 icon="\uf11b" block="version"
namespace UBIT_VERSION {
//This is the UBIT_VERSION Package
    let value = 0
    /**
     *
     */
    //% shim=UBIT_VERSION::init
    function init(): number {
        return value;
    }
    
    /**
     * Run vibration motor for a particular length of time
     * @param run_time is the length of time the motor will run in ms, eg: 100
     */
    //% blockId="read_version" block="get verion number" icon="\uf080"
    //% weight=92 blockGap=8
    export function getVersion(): number {
        let value = init()
        return value;
    }
    
}
