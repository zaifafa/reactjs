#include <iostream>
#include <fstream>
#include <string>
using namespace std;

struct Case {
    int caseId;
    string clientName;
    string caseDescription;
    string status;
};

void addNewCase() {
    Case newCase;
    cout << "\n=== Adding New Case ===\n";
    
    cout << "Enter Case ID: ";
    cin >> newCase.caseId;
    cin.ignore();
    
    cout << "Enter Client Name: ";
    getline(cin, newCase.clientName);
    
    cout << "Enter Case Description: ";
    getline(cin, newCase.caseDescription);
    
    cout << "Enter Case Status (Open/In Progress/Closed): ";
    getline(cin, newCase.status);
    
    ofstream file("cases.txt", ios::app);
    if (file.is_open()) {
        file << newCase.caseId << endl;
        file << newCase.clientName << endl;
        file << newCase.caseDescription << endl;
        file << newCase.status << endl;
        file.close();
        cout << "\nCase added successfully!\n";
    } else {
        cout << "\nError: Unable to open file.\n";
    }
}

void viewAllCases() {
    ifstream file("cases.txt");
    string line;
    int lineCount = 0;
    
    cout << "\n=== All Cases ===\n";
    
    if (file.is_open()) {
        while (getline(file, line)) {
            switch (lineCount % 4) {
                case 0:
                    cout << "\nCase ID: " << line << endl;
                    break;
                case 1:
                    cout << "Client Name: " << line << endl;
                    break;
                case 2:
                    cout << "Description: " << line << endl;
                    break;
                case 3:
                    cout << "Status: " << line << endl;
                    cout << "-------------------" << endl;
                    break;
            }
            lineCount++;
        }
        file.close();
        
        if (lineCount == 0) {
            cout << "No cases found.\n";
        }
    } else {
        cout << "Error: Unable to open file.\n";
    }
}

void searchCase() {
    int searchId;
    cout << "\nEnter Case ID to search: ";
    cin >> searchId;
    
    ifstream file("cases.txt");
    string line;
    int lineCount = 0;
    bool found = false;
    
    if (file.is_open()) {
        while (getline(file, line)) {
            if (lineCount % 4 == 0 && stoi(line) == searchId) {
                cout << "\nCase Found:\n";
                cout << "Case ID: " << line << endl;
                getline(file, line);
                cout << "Client Name: " << line << endl;
                getline(file, line);
                cout << "Description: " << line << endl;
                getline(file, line);
                cout << "Status: " << line << endl;
                found = true;
                break;
            }
            lineCount++;
        }
        file.close();
        
        if (!found) {
            cout << "\nCase not found.\n";
        }
    } else {
        cout << "Error: Unable to open file.\n";
    }
}

int main() {
    int choice;
    
    do {
        cout << "\n=== Case Management System ===\n";
        cout << "1. Add a New Case\n";
        cout << "2. View All Cases\n";
        cout << "3. Search for a Case\n";
        cout << "4. Exit\n";
        
        cin >> choice;
        
        switch (choice) {
            case 1:
                addNewCase();
                break;
            case 2:
                viewAllCases();
                break;
            case 3:
                searchCase();
                break;
            case 4:
                break;
            default:
                cout << "Invalid choice. Please try again." <<endl;
        }
    } while (choice != 4);
    
    return 0;
}