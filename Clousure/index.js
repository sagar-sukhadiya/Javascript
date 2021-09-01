const outerFun=(a)=>{
    let b=10;
    const innerFun=()=>{
        let sum = a+b;
        console.log(`the sum is a = ${sum}`);
    }
    innerFun();
}
outerFun(5);

// outer function using inner function b=10 inside in sum and also (a) is inside in inner function