#include <iostream>
using namespace std;

int main() {
    int arr[5], sum = 0;

    cout << "Enter 5 Integers: " << endl;

    for (int i = 0; i < 5; i++) {
        cin >> arr[i]; 
    }


    for (int i = 0; i < 5; i++) {
        sum + = arr[i]; 
    }

    cout << "The sum of the array elements is: " << sum << endl;

    return 0;
}
