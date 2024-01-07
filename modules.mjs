function square(num){
    return num**2;
}

function internal__cube(num){
    return num**3;
}

// module.exports = { square };


export {
    square,
    internal__cube as cube
}