#include <iostream>
#include <fstream> 
using namespace std;

int main() {
    ifstream inFile("student.txt");
    if (inFile.is_open()) {
        string line; 
        while (getline(inFile, line)) {
            cout << line << endl;
        }
        inFile.close();
    } else {
        cout << "Error opening file. " << endl;
    }
    return 0; 
}