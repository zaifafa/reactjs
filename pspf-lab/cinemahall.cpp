#include <iostream>
using namespace std;

int main() {
    int rows, cols;
    
    cout << "Enter number of rows: ";
    cin >> rows;
    cout << "Enter number of columns: ";
    cin >> cols;
    
    if (rows > 10 || cols > 10 || rows < 1 || cols < 1) {
        return 0;
    }
    
    int cinema[10][10];
    for(int i = 0; i < rows; i++) {
        for(int j = 0; j < cols; j++) {
            cinema[i][j] = 0;
        }
    }
    
    cout << "\nCinema Hall Layout:\n";
    for(int i = 0; i < rows; i++) {
        for(int j = 0; j < cols; j++) {
            cout << cinema[i][j] << " ";
        }
        cout << endl;
    }
    
    int r, c;
    cout << "Enter row number (1-" << rows << "): ";
    cin >> r;
    cout << "Enter column number (1-" << cols << "): ";
    cin >> c;
    
    r = r - 1;
    c = c - 1;
    
    if(r >= 0 && r < rows && c >= 0 && c < cols) {
        if(cinema[r][c] == 0) {
            cinema[r][c] = 1;
            cout << "Seat booked!\n";
        } else {
            cout << "Seat already taken!\n";
        }
    } else {
        cout << "Invalid seat number!\n";
    }
    
    cout << "\nCurrent Seating Arrangement:\n";
    for(int i = 0; i < rows; i++) {
        for(int j = 0; j < cols; j++) {
            cout << cinema[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}