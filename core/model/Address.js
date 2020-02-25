class Address {
  constructor({ addressLine1, addressLine2, pincode, city, state, country }) {
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.pincode = pincode;
    this.city = city;
    this.state = state;
    this.country = country;
  }
}

module.exports = Address;
