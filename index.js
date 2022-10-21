

function result() {
    let a = document.getElementById('value1').value;
    let total = 0;

    for (let b = 1; b <= 10; b++) {
        total = a * b;
        document.write("<br> "+ a +"*"+b+"="+total);  
    }
}