// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

function reverse(str) {
    let number = str.slice(str.length-1, str.length); 
    let newStr = str.slice(0, str.length-1).split('');
    let rvsArray = newStr.reverse();
    let joinArray = rvsArray.join('');
    let result = joinArray+number;
    return result;
}

console.log(reverse("NEGIE1"));