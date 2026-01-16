
// var bu ozgaruvchan ozgaruvchi  blok (if, for) ichida bo‘lsa ham tashqaridan ko‘rinadi.
// qayta deklaratsiya va qayta tayinlash mumkin.

// let bu ozgaruvchan ozgaruvchi  block-scoped — faqat o‘sha blok ichida amal qiladi.
//  qayta deklaratsiya mumkin emas, lekin qiymatini o‘zgartirish mumkin.

//     const bu ozgaruvchan ozgaruvchi emas lekin object orqali ichidagi qiymatlarni ozgartirish mumkin
//     const person = {
//         name: "John",
//         age: 30
//     };
// shu holatda almashtiriladi
// deklaratsiya qilinganidan keyin qiymatni qayta tayinlash mumkin emas (lekin obyektning ichidagi xususiyatlar o‘zgarishi mumkin)


// console.log(a); bunda underfind chiqadi chunki var hoisting qilinadi
// var a = 10;


// console.log(b); bu bunda xato beradi chunki let hoisting qilinmaydi
// let b = 20;


// const c = 30; bu ham bunda xato beradi chunki const ham hoisting qilinmaydi
// c = 40;


// if (true) { bu yerda block scope mavjud
//   var x = 1;
//   let y = 2;
// }
// console.log(x); // bunda 1 chiqadi chunki var block scope ga bog‘liq emas
// console.log(y); bunda xato beradi chunki let block scope ga bog‘liq


// const name = "Abrorbek";
// let age = 21;
// let isStudent = true;
//  age += 10;

// console.log("Name: " + name);
// console.log("Age: " + age);
// console.log("Is Student: " + isStudent);
//  nmaga real loyihalatrda var ishlatilmasligini asosiy sababi bu hoisting va block scope muammolari
//  va qayta deklaratsiya qilish mumkinligi sababli kodni tushunishni qiyinlashtiradi.

// let va const qachon ishlatishni 1 ta real hayot misol bilan tushuntiraman:
// Masalan, sizda foydalanuvchi ma'lumotlarini saqlash uchun o'zgaruvchilar bor. Foydalanuvchining ismi va yoshi o'zgarmaydi, shuning uchun ularni const bilan e'lon qilasiz. Ammo foydalanuvchining ballari vaqt o'tishi bilan o'zgarishi mumkin, shuning uchun uni let bilan e'lon qilasiz.
// const userId = "AB1234567"; // foydalanuvchi IDsi o'zgarmaydi
// const userName = "Abrorbek"; // foydalanuvchi ismi o'zgarmaydi
// let age = 21; // foydalanuvchi yoshi o'zgarishi mumkin
// hosting bu ozgaruvchilarni e'lon qilishdan oldin ularga murojaat qilish imkonini beradi.
// deklaratsiya  bu ozgaruvchini yaratish jarayoni