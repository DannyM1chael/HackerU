/*var a = prompt('Список продуктов');
var b = prompt('Разделитель');
var c = a.split(b);
console.log(c);

for (var i=1; i<=10; i+=2) {
    console.log(i)
};

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);*/

// var a = prompt('Введите число');
// userNum = Number(a);

// for (var i=2; i<=userNum; i++) {
//   console.log(i**2)
// }

// var a = [];
// var i = -1;
// while (i!=0) {
//   i = prompt('Введите число, для выхода выберите 0')
//   a.push(i);
// } console.log(a);

// var a = [];
// do {
//      i = prompt('Введите число, для выхода выберите 0')
//      if (i!=0) {
//       a.push(i)
//      };
  
// } while (i!=0);
// console.log(a)

// var a = [];
// do {
//     i = prompt('Введите свои любимые фильмы')
//     a.push(i);
//   } while (i!='Бойцовский клуб');
//   for ( i=0;i<=a.length-1;i++) {
//     console.log(a[i]);
//   };  

// var a = [];

// for (let i = 1; i <= 10; i++) {
//      let b = []
//      let c = []
//      for (let j = 1; j <= 10; j++) {
//        b.push(j*i)
//        bStr = String(b)
//        if (bStr.length < 3) {
//         c.push('00' + bStr)
         
//        } else if (bStr.length < 2) {
//         c.push('0' + bStr)
//        } else {
//          c.push(bStr)
//        }
//   }
//   a.push(c)
  
// }console.log(a) 

function fillRow1(a,b) { // параметры a b задают кол-во столбцов и колонок
  let table = []; 
  for ( i = 1 ; i <= a ; i++ ) {
      let row = [];
      for ( j = 1 ; j <= b ; j++ ) {
          if (((i + j) % 2) == 0) { // заполняются поочередно
              row.push('*');
          } else {
              row.push('-');
          }
      }
      table.push(row);
  }
  return table;
}

function fillRow2(a,b) { // параметры a b задают кол-во столбцов и колонок
  let table = []; 
  for ( i = 1 ; i <= a ; i++ ) {
      let row = [];
      for ( j = 1 ; j <= b ; j++ ) {
        if ((i - j) > 0) { // заполняет по диагонали верхнюю часть и нижнюю
        row.push('*');
      } else if ((i - j) < 0) {
        row.push('-');
      }
    }
      table.push(row);
  }
  return table;
}

function fillRow3(a,b) { // параметры a b задают кол-во столбцов и колонок
  let table = []; 
  for ( i = 1 ; i <= a ; i++ ) {
      let row = [];
      for ( j = 1 ; j <= b ; j++ ) {
        if ((i == 1 || i == b) || j == 1 || j == b) { // заполняет квадратом
        row.push('*');
      } else {
        row.push('-');
      }
    }
      table.push(row);
  }
  return table;
}

function fillRow4(a,b) { // параметры a b задают кол-во столбцов и колонок
  let table = []; 
  for ( i = 1 ; i <= a ; i++ ) {
      let row = [];
      for ( j = 1 ; j <= b ; j++ ) {
        if ((i == 1 || i == b) || j == 1 || j == b || i == j || (i + j) == b + 1) { // заполняет квадратом, диагональю
        row.push('*');
      } else {
        row.push('-');
      }
    }
      table.push(row);
  }
  return table;
}
