#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream outFile("student.txt");

    if (outFile.is_open()) {
        outFile << "Name: Ibrahim German " <<endl; 
        outFile << "Roll Number: 703 " <<endl; 
        outFile << "Grade: A* " <<endl; 

        outFile.close();

    }

    return 0;
}