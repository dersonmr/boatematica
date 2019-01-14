
var exp = new Array();
var cont = 0;
var a;
var teste = new Array();

function setValue(valor) {

    // alert("CLicou" + valor);
    // valor=document.getElements
    var oper = valor;
    // alert("valor do operador é : " + oper);
    switch (oper) {
        case 1: oper = 1;
            exp[cont] = 1;
            // alert("Contador está em " + cont);
            // alert("Expressão está" + exp[cont]);
            document.getElementById("delta").value = exp[cont];
            document.getElementById("display").value += exp[cont];
            cont++;
            document.getElementById("teste").innerHTML=exp;
            break;
        case 2: oper = 2;
            exp[cont] = 2;
            // alert("Contador está em " + cont);
            // alert("Expressão está" + exp[cont]);
            document.getElementById("delta").value = exp[cont];
            document.getElementById("display").value += exp[cont];
            cont++;
            break;
        case 3: oper = 3;
            exp[cont] = 3;
            // alert("Contador está em " + cont);
            // alert("Expressão está" + exp[cont]);
            document.getElementById("delta").value = exp[cont];
            document.getElementById("display").value += exp[cont];
            cont++;

            break;
        case 4: oper = 4;
            exp[cont] = 4;
            // alert("Contador está em " + cont);
            // alert("Expressão está" + exp[cont]);
            document.getElementById("delta").value = exp[cont];
            document.getElementById("display").value += exp[cont];
            cont++;
            break;
        case 5: oper = 5;
            exp[cont] = 5;
            // alert("Contador está em " + cont);
            // alert("Expressão está" + exp[cont]);
            document.getElementById("delta").value = exp[cont];
            document.getElementById("display").value += exp[cont];
            cont++;
            break;
        case 6: oper = 6;
            exp[cont] = 6;
            // alert("Contador está em " + cont);
            // alert("Expressão está" + exp[cont]);
            document.getElementById("delta").value = exp[cont];
            document.getElementById("display").value += exp[cont];
            cont++;
            break;
        case 7: oper = 7;
            exp[cont] = 7;
            // alert("Contador está em " + cont);
            // alert("Expressão está" + exp[cont]);
            document.getElementById("delta").value = exp[cont];
            document.getElementById("display").value += exp[cont];
            cont++;
            break;
        case 8: oper = 8;
            exp[cont] = 8;
            // alert("Contador está em " + cont);
            // alert("Expressão está" + exp[cont]);
            document.getElementById("delta").value = exp[cont];
            document.getElementById("display").value += exp[cont];
            cont++;
            break;
        case 9: oper = 9;
            exp[cont] = 9;
            // alert("Contador está em " + cont);
            // alert("Expressão está" + exp[cont]);
            document.getElementById("delta").value = exp[cont];
            document.getElementById("display").value += exp[cont];
            cont++;
            break;
        case 0: oper = "0";
            exp[cont] = "0";
            // alert("Contador está em " + cont);
            // alert("Expressão está" + exp[cont]);
            document.getElementById("delta").value = exp[cont];
            document.getElementById("display").value += exp[cont];
            cont++;
            break;
        case "x": oper = "x";
            exp[cont] = "x";
            // alert("Contador está em " + cont);
            // alert("Expressão está" + exp[cont]);
            document.getElementById("delta").value = exp[cont];
            document.getElementById("display").value += exp[cont];
            cont++;
            break;
        case "+": oper = "+";
            exp[cont] = "+";
            // alert("Contador está em " + cont);
            // alert("Expressão está" + exp[cont]);
            document.getElementById("delta").value = exp[cont];
            document.getElementById("display").value += exp[cont];
            cont++;
            break;
        default: oper = "não testou";
    }
    // alert(oper);
    // cont ++;
    // alert = ("Contador está em " + cont);
    // }
    // alert(oper);



    //  if ((valor>=0)||(valor<=0))
    // {alert("Valor Numérico "+valor);}

    //     else
    // }




    // do {oper = document.getElementById("display").value = expressao;
    // }
    // while (oper != "igual");

}


function resulta() {
    var res = eval("display");
    alert(res);
}
// var i2 = exp.length;
// for (i = -1; i < i2; i++) {
//     document.write(exp[i2] + "<br>");
// }
// document.write(exp[0] + "<br>");
