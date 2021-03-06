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

function addContactToAddressBook(AddressBook, contactToAdd) {
    if(AddressBook.some((contact) => { return contact.firstName == contactToAdd.firstName })) {
        console.log("Contact already present");
    }
    else {
        AddressBook.push(contactToAdd);
        console.log("Contact added");
    }
    return AddressBook;
}

function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        //  /const key = item.address.city;
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item.firstName]);
         } else {
             collection.push(item.firstName);
         }
    });
    return map;
}

try {
    let AddressBook = new Array();
    let contact1 = new Contact('James','Will','Delhi','Delhi',540020,'7894561230','j@j.com');
    console.log("Contact: "+contact1);
    let contact2 = new Contact('Darah','Will','aDelhi','ZDelhi',540021,'7894791230','j@j.com');
    let contact3 = new Contact('Vicky','Will','London','xDelhi',540017,'7894971230','j@j.com');
    AddressBook.push(contact1);
    AddressBook.push(contact2);
    AddressBook.push(contact3);

    let nameToEdit = "Sarah";
    let contactToEdit = new Contact('John','Will','kDelhi','lDelhi',530023,'7894971230','j@j.com');
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

    //uc6
    let totalContacts = AddressBook.reduce((total_Contacts, contact) => {
        return total_Contacts+= 1;
    }, 0);
    console.log("Total contacts: ", totalContacts)

    //uc7
    let contactToAdd = new Contact('James','Will','Delhi','Delhi',540021,'7894971230','j@j.com');
    AddressBook = addContactToAddressBook(AddressBook, contactToAdd)

    totalContacts = AddressBook.reduce((total_Contacts, contact) => {
        return total_Contacts+= 1;
    }, 0);
    console.log("Total contacts: ", totalContacts)

    //uc8
    let cityToSearch = 'Delhi';
    let personToSearch = 'Vicky';
    AddressBook.filter(contact => contact.address.city == cityToSearch)
                .filter(contact => contact.firstName == personToSearch)
                .forEach(contact => console.log(contact));

    //uc9 groupBy
    let groupedContacts = groupBy(AddressBook, contact => contact.address.city);
    console.log("Mappings: ", groupedContacts)

    //uc10
    let groupedContactsByCity = groupBy(AddressBook, contact => contact.address.city);
    groupedContactsByCity.forEach((value, key) => {
        console.log(key," => ",value.length);
    });

    //uc11
    AddressBook.sort((contact1, contact2) => {
        return contact1.firstName.localeCompare(contact2.firstName)
    }).forEach(contact => console.log(contact))

    //uc12
    console.log("=== SORTED BY CITY ===");
    AddressBook.sort((contact1, contact2) => {
        return contact1.address.city.localeCompare(contact2.address.city)
    }).forEach(contact => console.log(contact.toString()))
    console.log("=== SORTED BY STATE ===");
    AddressBook.sort((contact1, contact2) => {
        return contact1.address.state.localeCompare(contact2.address.state)
    }).forEach(contact => console.log(contact.toString()))
    console.log("=== SORTED BY ZIP ===");
    AddressBook.sort((contact1, contact2) => {
        return contact1.address.zip - (contact2.address.zip)
    }).forEach(contact => console.log(contact.toString()))

} catch (e) {
    console.log("Error! "+e);
}
