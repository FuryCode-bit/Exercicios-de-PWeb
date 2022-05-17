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

function siga(num) {
    if(num >=3 && num <= 10) {
        gonoSwitch(num)
    } else {
        console.log("Não é um poligono!")
    }
}

siga("teste")