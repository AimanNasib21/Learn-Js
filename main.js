// alert("hai")

/* alert("hoi") - bahagian alert atas tab
**/

// console.log('haiiii') - bahagian inspect console

// prompt('masuukkan umur') -  mcm form


// var umur = 24
// const x = 1 - nilai xble ubah
// let y = 2 - sama mcm var

// cth const umur = 30
// umur = 35 - akan kluar error d console
// code akan dibaca atas ke bawah

// cth 
// let umur = 30
// umur = 35 
// console.log('haiiii umur kamu ialah ' +umur )
// alert('haiiii umur kamu ialah ' +umur ) - tunjuk teks dlm alert
// alert(umur)

// cth 2
// let umur = prompt('masuukkan umur')
// alert ('umur kamu : '+umur)

// data type variable
// let nama = 'aiman' //string
// let umur = 24 //integer x prlu ''
// let tinggi = 167.2 // double float - guna titik
// let berat // isi soon
// let kapal = null //null xda nilai, 1 akan msuk else, 1 2 rujuk switch (bukan 1 atau 2 akan msuk default)

// alert('nama = ' + nama + ' umur = ' +umur) //display alert btindih

// == sama utk is != x sama utk else

// if else
// if (kapal == null){

//     kapal = 'xda lagi'
//     } else {
//         kapal = 'ada'
//     }

// switch(kapal){

//     case 1:
//         kapal = 'ada 1 ja'
//     break
//     case 2:
//         kapal = 'ada 2, hehe'
//     break
//     default:
//         kapal = 'xda lagi huhu'
//     break

// }

// Operasi + - / *
    // let baki = 5000
    // let bakiLebih = 10000
    // const hutang = 2000
    // const totalbaki = baki + bakiLebih - hutang

//     const x = 10
//     const y = 5
//     const z = x * y 
//     const o = x / y

// alert (`nilai x = ${x} X nilai y = ${y} maka hasil ialah ${z}`)
// alert (`nilai x = ${x} / nilai y = ${y} maka hasil ialah ${o}`)


// alert (`nama sya ${nama}, umur saya ${umur}, tinggi ${tinggi}cm, 
// kapal sya ${kapal}`)

// alert (`baki sya ialah Rm ${baki} dan baki tambahan Rm ${bakiLebih} 
//        total keseluruhan baki ialah ${totalbaki}`)

// ARRAY [nilai] - boleh simpan bnyk nilai [0,1,2] - urusan dipanggil index dlm array
//let namaGuru =['asep','teega','malik']
//namaGuru.push('proton','dell') //masukkan nama/nilai baru dalam let array
//namaGuru.shift() // nama/nilai first hilang
//namaGuru.pop() // nama/nilai last hilang
//alert(namaGuru) //xda kotak, akan muncul semua, [0] yg kluar c asep, [2] teega dan stsrusnya, [0,1]

//method 2 array
// let namaGuru =[]

// namaGuru[0] ='asep'
// namaGuru[1] ='teega'
// namaGuru[2] ='malik'

// alert(namaGuru)

//LOOPING

// for loop - ulangan bnyk kali

// console.log('nama sya aiman') // koman biasa
// console.log('nama sya aiman')

//console.log('nama sya aiman') - untuk copy

// 3 statement

// 1 - for 
// for(let i = 0; i <= 5; i = i + 1) { //akan muncul 5 + 1 = 6
//     console.log('nama sya aiman')
// }

// mapping
// const namaGuru = ['asep','teega','malik']
//  for(let i = 0; i <= namaGuru.length; i = i + 1) { //akan muncul 5 + 1 = 6, i=i+1 = i++
//     console.log(namaGuru[i])
//     console.log(namaGuru[0])
//     console.log(namaGuru[1])
// }

// 2 - while loop

// let i = 0
// while (i < 20){ // loop bhnti pada nilai 10
//     i++
//     console.log('nama sya aiman')
// }

// 3 - do while
// let i = 0 // bgantung nilai, skirany nilai 10, result kluar 1 
// do {
//     i++
//     console.log('nama sya aiman')
// }while(i < 5)

// let i = 0 // bgantung nilai, skirany nilai 10, result kluar 1 
// do {
//     i++
//     console.log('nama sya aiman')
// }while(i < 5)

// tugas - 


// let noHari = new Date().getDay();
// let hari;

// switch (noHari) {
//     case 1:
//         hari = 'Isnin';
//         break;
//     case 2:
//         hari = 'Selasa';
//         break;
//     case 3:
//         hari = 'Rabu';
//         break;
//     case 4:
//         hari = 'Khamis';
//         break;
//     case 5:
//         hari = 'Jumaat';
//         break;
//     case 6:
//         hari = 'Sabtu';
//         break;
//     default:
//         hari = 'Ahad';
//         break;
// }

// alert(`Hari ini adalah ${hari}`)
// console.log(`Hari ini adalah ${hari}`)
