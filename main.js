let number = Number(prompt("enter a number"));
let a = 0,b = 1;

for (i=1;i<number;i++) {
    document.write(b);
    d = a+b;
    a = b;
    b = d;
}