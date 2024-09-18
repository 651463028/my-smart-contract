const { expect } = require("chai");

describe("IDStorage", function () {
    it("Should store and retrieve person correctly", async function () {
        const IDStorage = await ethers.getContractFactory("IDStorage");
        const idStorage = await IDStorage.deploy(); // แค่ deploy ก็เพียงพอ ไม่ต้องเรียก deployed() อีก
        // await idStorage.deployed();  // สามารถลบบรรทัดนี้ได้

        await idStorage.addPerson(12345, "John", "Doe", "123 Main St");
        const person = await idStorage.getID(12345);

        expect(person.firstName).to.equal("John");
        expect(person.lastName).to.equal("Doe");
        expect(person.homeAddress).to.equal("123 Main St");

        const allPeople = await idStorage.getAll();
        expect(allPeople.length).to.equal(1);
    });
});
