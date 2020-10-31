var faker = require("faker");
faker.seed(100);
var jobs = ["Pro Gamer", "Cage Dancer", "Software Developer", "Kpop Idol",]
var users = []
for (let i = 0; i <= 503; i++) {
    users.push(
        {
            _id: faker.random.number(),
            fullName: faker.name.findName(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            gender: "Male",
            title: faker.helpers.randomize(jobs),
            timeAt: faker.random.number(10) + " years",
            location: faker.address.state(),
            homeTown: faker.address.city() + "," + faker.address.state(),
            image: faker.image.avatar()
        }
    )
}
var user = faker.helpers.randomize(users);

var days = []
for (let i = 0; i < 5; i++) {
    var items = []
    for (let i = 0; i < 3; i++) {
        items.push({
            label: faker.lorem.word(),
            body: faker.lorem.paragraph()
        })
    }
    days.push({
        _id: faker.random.number(),
        job: {
            _id: faker.random.number(),
            title: faker.lorem.words()
        },
        company: faker.company.companyName(),
        items: items
    })
}
var categories = [];
for (let i = 0; i < 2; i++) {
    var products = []
    for (let i = 0; i < 8; i++) {
        products.push({
            label: faker.lorem.word(),
            company: faker.company.companyName()
        })
    }
    categories.push({
        name: faker.lorem.word(),
        products: products,
    })
}
var products = {
    productType: faker.lorem.word(),
    categories: categories,
}


module.exports = function () {
    return {
        user: user,
        users: users,
        days: days,
        products: products
    }
}