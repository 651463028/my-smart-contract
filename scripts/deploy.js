async function main() {
    const IDStorage = await ethers.getContractFactory("IDStorage");
    const idStorage = await IDStorage.deploy(); // Deploy contract

    // ตรวจสอบและแสดง address โดยไม่ต้องใช้ deployed()
    console.log("Contract deployed to address:", idStorage.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
