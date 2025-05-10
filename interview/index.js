function example(){
    var x = 1;
    let y = 2;
    const z = 3;

    if(true){
        var x = 4;
        let y = 5;
        const z = 6;

        console.log(x, y, z);
    }

    console.log(x, y, z);

    x=7;
    y=8;

    console.log(x, y, z);
}

example();