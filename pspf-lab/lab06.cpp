#include <iostream>
using namespace std;

int main() {
    const int NUM_SUBJECTS = 3; // Maths, Science, English
    const int NUM_TESTS = 2;    
    double averages[NUM_SUBJECTS]; 

    for (int i = 0; i < NUM_SUBJECTS; i++) {
        double sum = 0; 
        int validTests = 0;
        cout << "Enter marks for Subject " << (i + 1) << ":\n";

        for (int j = 0; j < NUM_TESTS; j++) {
            int marks;
            cout << "Test " << (j + 1) << ": ";
            cin >> marks;

            if (marks < 0 || marks > 100) {
                cout << "Invalid marks! Skipping this test.\n";
                continue; k,
            }

            sum += marks;
            validTests++;
        }

        if (validTests > 0) {
            averages[i] = sum / validTests;
        } else {
            averages[i] = 0; 
        }

        cout << "Average for Subject " << (i + 1) << ": " << averages[i] << "\n\n";
    }

    cout << "Final Results:\n";
    for (int i = 0; i < NUM_SUBJECTS; i++) {
        cout << "Subject " << (i + 1) << ": " << averages[i] << "\n";
    }

    return 0;
}