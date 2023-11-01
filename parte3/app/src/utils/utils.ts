export function calculaDV(num: number): number {
    const digits: number[] = num.toString().split("").map(Number);
    const weights: number[] = [4, 5, 6, 7];
    let sum = 0;
  
    if (digits.length !== weights.length) {
      throw new Error("Número inválido, deve conter 4 dígitos.");
    }
  
    for (let i = 0; i < digits.length; i++) {
      sum += digits[i] * weights[i];
    }
  
    const remainder = (sum % 20) + 7;
    const dv = remainder % 10;
  
    return dv;
  }
  
  export function validaNumeroXpto(num: number): boolean {
    if (num < 10004 || num > 99995) {
      return false;
    }
  
    const dv = calculaDV(Math.floor(num / 10)); // Remove o último dígito (DV) para o cálculo
    const lastDigit = num % 10;
  
    return dv === lastDigit;
  }
  