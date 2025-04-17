function counter(num) {
    console.log(num);
    if (num > 0) {
        num--;
        counter(num);
    } 
}

counter(5);