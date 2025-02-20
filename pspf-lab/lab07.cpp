#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    string filename, oldWord, newWord;
    
    cout << "Enter filename: ";
    getline(cin, filename);
    
    cout << "Word to replace: ";
    getline(cin, oldWord);
    
    cout << "Replace with: ";
    getline(cin, newWord);
    
    ifstream readFile(filename);
    string fileContent, line;
    
    while(getline(readFile, line)) {
        fileContent += line + "\n";
    }
    readFile.close();
    
    size_t pos = 0;
    while((pos = fileContent.find(oldWord, pos)) != string::npos) {
        fileContent.replace(pos, oldWord.length(), newWord);
        pos += newWord.length();
    }
    
    ofstream writeFile(filename);
    writeFile << fileContent;
    writeFile.close();
    
    cout << "File updated successfully!" << endl;
    
    return 0;
}