// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IDStorage {
    struct Person {
        uint256 idNumber;
        string firstName;
        string lastName;
        string homeAddress;
    }

    Person[] public people;
    mapping(uint256 => Person) private idToPerson;

    // เพิ่มข้อมูลบุคคลใหม่
    function addPerson(uint256 _idNumber, string memory _firstName, string memory _lastName, string memory _homeAddress) public {
        Person memory newPerson = Person({
            idNumber: _idNumber,
            firstName: _firstName,
            lastName: _lastName,
            homeAddress: _homeAddress
        });

        people.push(newPerson);
        idToPerson[_idNumber] = newPerson;
    }

    // ดึงข้อมูลทั้งหมด
    function getAll() public view returns (Person[] memory) {
        return people;
    }

    // ดึงข้อมูลโดยใช้เลขบัตรประจำตัว
    function getID(uint256 _idNumber) public view returns (Person memory) {
        return idToPerson[_idNumber];
    }
}
