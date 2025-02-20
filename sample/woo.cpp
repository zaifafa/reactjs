#include <iostream>
#include <string>
using namespace std;

struct Car {
    string brand;
    string model;
    float price;
};

int main() {
    Car cars[2]; 
    
    for (int i = 0; i < 2; i++) {
        cout << "Enter details for car " << i + 1 << ":\n";
        cout << "Brand: ";
        cin >> cars[i].brand;
        cout << "Model: ";
        cin >> cars[i].model;
        cout << "Price: ";
        cin >> cars[i].price;
        cout << endl;
    }

    cout << "\nDisplaying Car Details:\n";
    for (int i = 0; i < 2; i++) {
        cout << "Car " << i + 1 << " - Brand: " << cars[i].brand
             << ", Model: " << cars[i].model
             << ", Price: " << cars[i].price << endl;
    }

    return 0;
}
