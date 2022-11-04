// Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

function counting(input, query) {
    
    let res = [];

    for (let i=0; i<query.length; i++) {
        let counter = 0;
        for (let j=0; j<input.length; j++) {
            if(query[i] == input[j]) {
                counter ++;
            }
        }
        res.push(counter)
    }

    return res;
}

console.log(counting(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz']));