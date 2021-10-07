class Address {
    constructor(...params) {
        this.city = params[0];
        this.state = params[1];
        this.zip = params[2];
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

    toString() {
        return "firstName= "+this.firstName+", lastName= "+this.lastName
                +", city= "+this.address.city+", state= "+this.address.state
                +", zip= "+this.address.zip+", phoneNmber= "+this.phoneNumber
                +", email= "+this.email;
    }
}

let contact = new Contact('James','Will','Delhi','Delhi',540021,'+91-7894561230','j@j.com');
console.log("Contact: "+contact)