// Declaring type alias Info
// assigning types to the keys
type Info = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: Address
}
// Declaring type alias Address fot the Nested object address
// assigning types to the keys and address to type Address
type Address = {
    street: string;
    city: string;
    zipCode: string;
}

[
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "address": {
        "street": "123 Main St",
        "city": "Springfield",
        "zipCode": "12345"
      }
    },
  ]
