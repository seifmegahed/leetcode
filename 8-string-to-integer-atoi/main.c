#define NEGATIVE -1
#define POSITIVE -2
#define NON_DIGIT -3
#define WHITE_SPACE -4

int getDigit(char character) {
    switch (character) {
    case '0':
        return 0;
    case '1':
        return 1;
    case '2':
        return 2;
    case '3':
        return 3;
    case '4':
        return 4;
    case '5':
        return 5;
    case '6':
        return 6;
    case '7':
        return 7;
    case '8':
        return 8;
    case '9':
        return 9;
    case '-':
        return NEGATIVE;
    case '+':
        return POSITIVE;
    case ' ':
        return WHITE_SPACE;
    default:
        return NON_DIGIT;
    }
}

int myAtoi(char* s) {
    const size_t charSize = strlen(s);
    if (!charSize)
        return 0;
    uint8_t resultArray[charSize];
    uint8_t resultArrayIndex = 0;
    double result = 0;
    int signedResult = 0;
    uint mutliplierIndex = 0;
    bool negative = false;
    bool awaitNumber = false;
    for (size_t index = 0; index < charSize; index++) {
        const int8_t currentDigit = getDigit(s[index]);
        if (currentDigit == NON_DIGIT)
            break;
        else if (resultArrayIndex == 0 && currentDigit == WHITE_SPACE) {
            if (awaitNumber)
                break;
        } else if (resultArrayIndex == 0 && currentDigit == POSITIVE) {
            if (awaitNumber)
                break;
            awaitNumber = true;
        } else if (resultArrayIndex == 0 && currentDigit == NEGATIVE) {
            if (awaitNumber)
                break;
            awaitNumber = true;
            negative = true;
        } else if (currentDigit > -1)
            resultArray[resultArrayIndex++] = currentDigit;
        else
            break;
    }

    for (int digitIndex = resultArrayIndex - 1; digitIndex > -1; digitIndex--)
        result += resultArray[digitIndex] * pow(10, mutliplierIndex++);

    if (negative)
        result *= -1;

    if (result > 2147483647)
        result = 2147483647;
    if (result < -2147483648)
        result = -2147483648;

    return result;
}