class Address {
    constructor(...params) {
        this.city = params[0];
        this.state = params[1];
        this.zip = params[2];
    }

    get city() {return this._city};
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$')
        if(cityRegex.test(city)) this._city = city;
        else throw 'city is incorrect';
    }

    get state() {return this._state};
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$')
        if(stateRegex.test(state)) this._state = state;
        else throw 'state is incorrect';
    }

    get zip() {return this._zip};
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$')
        if(zipRegex.test(zip)) this._zip = zip;
        else throw 'zip is incorrect';
    }
}
class Contact {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = new Address(params[2],params[3],params[4]);
        this.phoneNumber = params[5];
        this.email = params[6];
    }

    get firstName() {return this._firstName};
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(nameRegex.test(firstName)) this._firstName = firstName;
        else throw 'firstName is incorrect';
    }

    get lastName() {return this._lastName};
    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(nameRegex.test(lastName)) this._lastName = lastName;
        else throw 'lastName is incorrect';
    }

    get phoneNumber() {return this._phoneNumber};
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[0-9]{10}$')
        if(phoneNumberRegex.test(phoneNumber)) this._phoneNumber = phoneNumber;
        else throw 'phoneNumber is incorrect';
    }

    get email() {return this._email};
    set email(email) {
        let emailRegex = RegExp('^[a-z]+([\.\+\_\-][a-z]+)?@[a-z]+.[a-z]+(\.[a-z]{2})?$')
        if(emailRegex.test(email)) this._email = email;
        else throw 'email is incorrect';
    }

    toString() {
        return "firstName= "+this.firstName+", lastName= "+this.lastName
                +", city= "+this.address.city+", state= "+this.address.state
                +", zip= "+this.address.zip+", phoneNmber= "+this.phoneNumber
                +", email= "+this.email;
    }
}

try {
    let AddressBook = new Array();
    let contact1 = new Contact('James','Will','Delhi','Delhi',540021,'7894561230','j@j.com');
    console.log("Contact: "+contact1);
    let contact2 = new Contact('Sarah','Will','Delhi','Delhi',540021,'7894791230','j@j.com');
    let contact3 = new Contact('Vicky','Will','Delhi','Delhi',540021,'7894971230','j@j.com');
    AddressBook.push(contact1);
    AddressBook.push(contact2);
    AddressBook.push(contact3);

    let nameToEdit = "Sarah";
    let contactToEdit = new Contact('John','Will','Delhi','Delhi',540021,'7894971230','j@j.com');
    let editedAddressBook = new Array();
    AddressBook.forEach(contact => {
        if(contact.firstName == nameToEdit) {
            editedAddressBook.push(contactToEdit);
        } else {
            editedAddressBook.push(contact);
        }
    });
    console.log("Edited addressbook: ", editedAddressBook)

    //uc5
    let nameToDelete = "Vicky";
    let deletedAddressBook = AddressBook.filter(function (contact) {
        return contact.firstName != nameToDelete;
    });
    console.log("After delete addressbook: ", deletedAddressBook)
} catch (e) {
    console.log("Error! "+e);
}