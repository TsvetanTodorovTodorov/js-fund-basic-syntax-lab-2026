function solve(num) {
    let sum = 0;
    for (let i = 1; i <= 100; i+=2) {
        if (num >= 1) {
                console.log(i); 
                sum += i;
        }
        num--;
        // 48 more times we do the loop before we CAN exit it
    }
console.log(`Sum: ${sum}`);
}
solve(3);