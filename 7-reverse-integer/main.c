int reverse(int x)
{
  if (x == 0 || x == -2147483648)
    return 0;

  int32_t value = x;
  bool negative = false;
  unsigned int reversedNumber = 0;
  int32_t reversedNumberSigned = 0;
  uint8_t remainder = 0;

  if (value < 0)
  {
    negative = true;
    value *= -1;
  }

  if (value < 10)
    return x;

  if (value > 999999999 && (value % 10) > 2)
    return 0;

  while (value > 0)
  {
    remainder = value % 10;
    reversedNumber *= 10;
    reversedNumber += remainder;
    value /= 10;
  }

  if (negative && reversedNumber <= 2147483648)
  {
    reversedNumberSigned = reversedNumber;
    reversedNumberSigned *= -1;
  }
  else if (reversedNumber <= 2147483647)
    reversedNumberSigned = reversedNumber;

  return reversedNumberSigned;
}