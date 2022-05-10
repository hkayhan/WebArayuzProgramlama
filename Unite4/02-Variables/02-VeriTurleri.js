// string tanımlaması çift tırnak veya tek tırnak kullanarak yapılabilir.
let string1="Merhaba"
let string2="Dünya"

// stringler başka string ifadelerle birleştirilebilirler.
let birlesim= string1+" "+string2
console.log(birlesim);
// çıktı: Merhaba Dünya

// index kullanarak istenilen karaktere ulaşılabilir
console.log("İlk karakter:",birlesim[0])
console.log("İkinci karakter:",birlesim[3])

// number tanımlama
let number=10


// number ve string farkı
let nbr =10
console.log(typeof nbr)
// çıktı: number

let str ="10"     //nbr değişkenine eşit değildir
console.log(typeof str)
// çıktı: string


// string ifadenin number ifadeye dönüşümü
str="10.34"

let numberInt= parseInt(str)
console.log(numberInt)
// çıktı :10

let numberFloat= parseFloat(str)
console.log(numberFloat);
// çıktı: 10.34
