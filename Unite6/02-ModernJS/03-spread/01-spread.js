const meyveler = ["elma","muz","çilek"]

console.log(...meyveler);
// çıktı:elma muz çilek


const dizi1=[1,2,3]
const dizi2=[4,5,6]
const dizi3=[...dizi1,...dizi2]

console.log(dizi3);
// çıktı: [ 1, 2, 3, 4, 5, 6 ]