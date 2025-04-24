**Classes are the bluprints for creating an objeccts**

```Javascript
    class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.createdAt = new Date().toISOString().split("T")[0];

        this.hobbies = [];

        this.address = {
        city: "",
        state: "",
        country: "",
        zipCode: "",
        };
    }

    addHobby = (hobby) => {
        this.hobbies.push(hobby);
    };

    removeHobby = (hobby) => {
        const index = this.hobbies.indexOf(hobby);
        if (index !== -1) {
        this.hobbies.splice(index, 1);
        }
    };

    updateAddress = (city, state, country, zipCode) => {
        this.address = { city, state, country, zipCode };
    };

    getProfile = () => {
        return {
        name: this.name,
        age: this.age,
        createdAt: this.createdAt,
        hobbies: this.hobbies,
        address: this.address,
        };
    };
    }

    const user = new Person("Gourav", 25);
    user.addHobby("cricket");
    user.addHobby("badminton");
    console.log("user : ", user);

    user.removeHobby("cricket");

    console.log("user second: ", user);

    user.updateAddress("ellenabad", "haryana", "india", 125102);
    console.log("user third: ", user);


    const last = user.getProfile();
    console.log("user last: ", last);
```