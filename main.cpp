#include "pxt.h";
using namespace pxt;

/**
 * This is the UBIT_VERSION Package
 */
//% color=#00A654 weight=100
namespace UBIT_VERSION {

    bool initialized = false;
    int value;
    
    //%
    void init() {
        if (initialized) {
            value = 0;
            return value;
        }

        #if MICROBIT_CODAL
            value = 2;
        #else
            value = 1;
        #endif
        return value;
    }
}