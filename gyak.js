let userNamePattern = /^[a-z]{3,}$/;
console.log(userNamePattern.test("lmaofuccker"));
console.log(userNamePattern.test("lmao99fukker"));

let emailSearchPattern = /[a-z0-9._-]+@[a-z._-]+/g;
let szoveg = "A petrik email cime: petrik@petrik.hu, a titkarsage titkarsag@petrik.hu";

let emailCimek = szoveg.matchAll(emailSearchPattern);
for (let email of emailCimek){
    console.log(email[0]);
}