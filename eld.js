var x=2004;
if (x%4===0) {
    if (x % 100 === 0 && x % 400 !== 0) {
        console.log(x, "kabisa yili emas")
    } else {
        console.log(x, "kabisa yili")
    }
}
else {
    console.log(x ,"kabisa yili emas")
}
