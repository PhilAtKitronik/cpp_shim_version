#include "pxt.h";
using namespace pxt;

/**
 * This is the UBIT_VERSION Package
 */
//% color=#00A654 weight=100
namespace UBIT_VERSION {

    bool initialized = false;
    int value = 0;
    
    //%
    int init() {
        //if (initialized) {
        //    return value;
        //}

        #if MICROBIT_CODAL
            value = 2;
        #else
            value = 1;
        #endif
        return value;
    }
}