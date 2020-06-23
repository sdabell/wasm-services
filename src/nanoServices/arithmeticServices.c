/*
 *  Nano services
 */

int add(int a, int b) {
  return a + b;
}

int sub(int a, int b) {
  return a - b;
}

int mult(int a, int b) {
  return a * b;
}

int div(int a, int b) {
  return a / b;
}

int add3( int *arr, int length) {
  int sum = 0;
  for (int i = 0; i < length; i++) {
    sum+=arr[i];
  }
  return sum;
}
