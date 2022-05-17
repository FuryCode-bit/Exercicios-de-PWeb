const pi = 3.14159;

function calculoArea(r){
    let area = (pi * r * r).toFixed(2);
    return "A área do circulo de raio " + r + " é: " + area;
}

function main(){
    for (var i = 2; i <= 10; i++){
        if(i != 5){
            console.log(calculoArea(i));
        }
    }
}

main()