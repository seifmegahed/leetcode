bool isPalindrome(int x) {
    if(x < 0) return false;
    if(x < 10) return true;
    
    uint8_t digitArray[10];
    size_t arraySize = 0;

    while(x){
        digitArray[arraySize++] = x % 10;
        x /= 10;
    }

    for(size_t leftIndex = 0; leftIndex < arraySize; leftIndex++){
        if(digitArray[leftIndex] != digitArray[--arraySize]) return false;
        if(leftIndex+1 == arraySize) break;
    }

    return true;
}