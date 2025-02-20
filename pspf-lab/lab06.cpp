#include <iostream>
#include <fstream>
#include <string>
using namespace std;

struct Book {
    string title;
    string author;
    string isbn;
    bool available;
};

int main() {
    Book books[100];
    int bookCount = 0;
    
    while(true) {
        cout << "1. Add Book" << endl;
        cout << "2. Check Out Book" << endl;
        cout << "3. Return Book" << endl;
        cout << "4. Show Books" << endl;
        cout << "5. Exit" << endl;
        
        int choice;
        cin >> choice;
        cin.ignore();

        if(choice == 1) {
            Book b;
            cout << "Book Title: ";
            getline(cin, b.title);
            cout << "Author: ";
            getline(cin, b.author);
            cout << "ISBN: ";
            getline(cin, b.isbn);
            b.available = true;

            books[bookCount] = b;
            bookCount++;

            ofstream file("library.txt", ios::app);
            file << b.title << endl;
            file << b.author << endl;
            file << b.isbn << endl;
            file << b.available << endl;
            file.close();
        }
        else if(choice == 2) {
            string isbn;
            cout << "Enter Book ISBN to Check Out: ";
            getline(cin, isbn);

            for(int i = 0; i < bookCount; i++) {
                if(books[i].isbn == isbn && books[i].available) {
                    books[i].available = false;
                    cout << "Book Checked Out!" << endl;
                    break;
                }
            }
        }
        else if(choice == 3) {
            string isbn;
            cout << "Enter Book ISBN to Return: ";
            getline(cin, isbn);

            for(int i = 0; i < bookCount; i++) {
                if(books[i].isbn == isbn && !books[i].available) {
                    books[i].available = true;
                    cout << "Book Returned!" << endl;
                    break;
                }
            }
        }
        else if(choice == 4) {
            for(int i = 0; i < bookCount; i++) {
                cout << "Title: " << books[i].title << endl;
                cout << "Author: " << books[i].author << endl;
                cout << "ISBN: " << books[i].isbn << endl;
                cout << "Available: " << (books[i].available ? "Yes" : "No") << endl;
                cout << "---" << endl;
            }
        }
        else if(choice == 5) {
            break;
        }
    }

    return 0;
}