const countdown = (num) => {
    if(num != 0){
        console.log(num);
        countdown(num - 1);
    } else {
        return
    }
}

countdown(10);