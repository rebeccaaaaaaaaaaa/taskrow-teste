// Módulo numeroXpto.ts

// Função que calcula o dígito verificador (DV) para um número XPTO de 4 dígitos
export function calculaDV(numero: number): number {
    if (numero >= 1000 && numero <= 9999) {
      const digit1 = Math.floor(numero / 1000) * 4;
      const digit2 = (Math.floor(numero / 100) % 10) * 5;
      const digit3 = (Math.floor(numero / 10) % 10) * 6;
      const digit4 = (numero % 10) * 7;
      const soma = digit1 + digit2 + digit3 + digit4;
      const resto1 = soma % 20;
      const soma2 = resto1 + 7;
      const dv = soma2 % 10;
      return dv;
    } else {
      throw new Error("O número deve ter 4 dígitos (entre 1000 e 9999).");
    }
  }
  
  // Função que valida se um número XPTO de 5 dígitos é válido
  export function validaNumeroXpto(numero: number): boolean {
    if (numero >= 10004 && numero <= 99995) {
      const numPart = Math.floor(numero / 10); // Remove o dígito verificador
      const dv = numero % 10; // Dígito verificador
      return calculaDV(numPart) === dv;
    }
    return false;
  }
  