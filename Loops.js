// for Iterations/to some extent reusing the code

// For loop --- When we know the exact requirement/number of iterations
// while loop --- When we do not know the size we use while loop
// do while loop --- Atleast once you have to execute irrespective of condition true/false

// for(let i=10; i>=0;i--){
//     // if(i%5==0)
//         console.log(i);
// }

// 4 Sections
    // 1. Initialization
    // 2. Conditional
    // 3. Execute the statements
    // 4. Increment/decrement

    a=1+1;
    b=a++; // Post Increment -- First value gets assigned/execution completes then value is incremented
    // b=2 , a=2+1=3

    c=++a;
    c=--a; // a=3+1=4, c=4 // Pre Increment
    console.log(a); //1
    console.log(b); //1
    console.log(c); //1

    let m=[1,2,3,4,5];
    b=3;
    var bool=b<4;
    while(bool){
        console.log("Hello");
        b++;
        bool=b<14;
    }

    do{
        console.log("Hello Do while");
    }while(bool); 