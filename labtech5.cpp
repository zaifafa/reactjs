#include <iostream>
using namespace std;

int main() {
    int n;

    // Ask the user for the number
    cout << "Enter a number: ";
    cin >> n;

    // Print even numbers
    cout << "Even numbers are:" << endl;
    for (int i = 1; i <= n; i++) {
        if (i % 2 == 0) { // Check if the number is even
            cout << i << endl; // Print each even number on a new line
        }
    }

    return 0; 
}

