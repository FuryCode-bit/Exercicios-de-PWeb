function gono(string) {
    return string + "gono";
}

const gonoSwitch =  (value) => ({
    3: "Triângulo",
    4: "Quadrilátero",
    5: gono("Penta"),
    6: gono("Hexa"),
    7: gono("Hepta"),
    8: gono("Octa"),
    9: gono("Enea"),
    10: gono("Deca"),
})[value]

function poli(num) {
    if(num >=3 && num <= 10) {
        console.log(gonoSwitch(num));
    } else {
        console.log("Nº de lados deve ser um valor compreendido entre 3 e 10")
    }
}

