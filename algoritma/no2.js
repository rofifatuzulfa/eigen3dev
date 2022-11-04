// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

function longestStr(str) {
    let count = 0;
    let word = str.split(' ');

    for (let i=0; i<word.length; i++) {
        if (word[i].length>count) {
            str=word[i];
            count=word[i].length;
        }
    }

    return(str+": "+ count + " character");
}

console.log(longestStr("Saya sangat senang mengerjakan soal algoritma"));