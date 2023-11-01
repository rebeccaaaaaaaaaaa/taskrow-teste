"use strict";
// Módulo numeroXpto.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.validaNumeroXpto = exports.calculaDV = void 0;
// Função que calcula o dígito verificador (DV) para um número XPTO de 4 dígitos
function calculaDV(numero) {
    if (numero >= 1000 && numero <= 9999) {
        var digit1 = Math.floor(numero / 1000) * 4;
        var digit2 = (Math.floor(numero / 100) % 10) * 5;
        var digit3 = (Math.floor(numero / 10) % 10) * 6;
        var digit4 = (numero % 10) * 7;
        var soma = digit1 + digit2 + digit3 + digit4;
        var resto1 = soma % 20;
        var soma2 = resto1 + 7;
        var dv = soma2 % 10;
        return dv;
    }
    else {
        throw new Error("O número deve ter 4 dígitos (entre 1000 e 9999).");
    }
}
exports.calculaDV = calculaDV;
// Função que valida se um número XPTO de 5 dígitos é válido
function validaNumeroXpto(numero) {
    if (numero >= 10004 && numero <= 99995) {
        var numPart = Math.floor(numero / 10); // Remove o dígito verificador
        var dv = numero % 10; // Dígito verificador
        return calculaDV(numPart) === dv;
    }
    return false;
}
exports.validaNumeroXpto = validaNumeroXpto;
