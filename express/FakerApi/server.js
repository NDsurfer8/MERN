const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

class User{
    constructor(){
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneNumber();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName();
        this.id = faker.datatype.number();
    }
}





class Company{
    constructor(){
        this.id = faker.datatype.number();
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}


// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});


app.get("/api/users/new", (req, res) => {
    res.json({ user : new User()});
});

app.get("/api/companies/new", (req, res) => {
    res.json({ Company : new Company()});
});

app.get("/api/users/companies", (req, res) => {
    res.json({ 
        user : new User(),
        Company : new Company()});
});










// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));