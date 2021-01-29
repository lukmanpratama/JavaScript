


// var jumlah = 100
// var nilai = 1
// while(nilai <= jumlah){
//     console.log('qwertyuio')
//     nilai++
// }


// for(var i = 1; i <= 10; i++){
//     console.log('asdfghjk')
// }


// var angka = 5
// if(angka < 10){
//     console.log(angka + 'kurang dari 10')
// }


// var angka = 5
// if(angka % 2 == 0){
//     console.log(angka + ' bilangan genap')
// }else{
//     console.log(angka + ' bilangan ganjil')
// }


// var jml = 12
// for( var i = 1; i <= jml; i++){
//     if(i <= 6){
//         console.log(i + ' beroperasi')
//     }else{
//         console.log(i + ' tdk beroperasi')
//     }
// }


// var jml = 12
// var opr = 6
// for( var i = 1; i <= jml; i++){
//     if(i <= 6 && i!== 5){
//         console.log(i + ' beroperasi')
//     }else if(i == 8 || i == 10 || i == 5){
//         console.log(i + ' lembur')
//     }else{
//         console.log(i + ' tdk beroperasi')
//     }
// }


// var item = 'nasi';

// switch(item){
//     case 'nasi' :
//         console.log('sehat');
//         break;
//     case 'kfc' :
//         console.log('tdk sehat');
//         break;
// }


// var item = 'susu';

// switch(item){
//     case 'nasi' :
//     case 'susu' :
//     case 'sayur' :
//         console.log('sehat');
//         break;
//     case 'kfc' :
//     case 'kebab' :
//         console.log('tdk sehat');
//         break;
// }


// var s = ''
// for(var i = 0; i < 10; i++){
//     for(var j = 0; j < 10; j++){
//         s +='*';
//     }
//     s +='\n'
// }
// console.log(s)


// var s = ''
// for(var i = 0; i < 10; i++){
//     for(var j = 0; j <= i; j++){
//         s +='*';
//     }
//     s +='\n'
// }
// console.log(s)


// var s = '';
// for(var i = 10; i > 0; i--){
//     for(var j = 0; j < i; j++){
//         s +='*';
//     }
//     s +='\n'
// }
// console.log(s)


// var s = '';
// for(var i = 1; i <= 10; i++){
//     for(var j = 9; j >= i; j--){
//         s +=' ';
//     }
//     for(var k = 1; k <= i; k++){
//         s +='*';
//     }
//     for(var l = 1; l <= i-1; l++){
//         s +='*';
//     }
//     s +='\n'
// }
// console.log(s)


// var s = '';
// for(var i = 10; i >= 0; i--){
//     for(var j = 9; j >= i; j--){
//         s +=' ';
//     }
//     for(var k = 1; k <= i; k++){
//         s +='*';
//     }
//     for(var l = 1; l <= i-1; l++){
//         s +='*';
//     }
//     s +='\n'
// }
// console.log(s)

var s = '';
for(var i = 0; i < 10; i++)
    {
        for(var space = 1; space <= 10-i; space++)
           s +=' ';

        for(var j = 0; j <= i; j++)
        {
            if (j == 0 || i == 0)
                coef = 1;
            else
                coef = coef*(i-j+1)/j;

            coef = ' ';
        }
        s +='\n';
    }
console.log(s)