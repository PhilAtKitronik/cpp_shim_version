#include "pxt.h";
using namespace pxt;

/**
 * This is the UBIT_VERSION Package
 */
//% color=#00A654 weight=100
namespace UBIT_VERSION {

    bool initialized = false;

    //%
    void init() {
        if (initialized) return;

        #if !MICROBIT_CODAL
                return board.hardwareVersion;
        #endif
    }
}