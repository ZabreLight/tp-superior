const GB = 2**20;
const MB = 2**10;

const ecuacion = t => 3*GB - 2 * 2**t - 51200*t - 2*MB;

const derivada = t => -2 * 2**t * Math.log(2) - 51200;

const despeje = t => Math.log((3*GB - 51200*t - 2*MB) / 2) / Math.log(2);

const ecNewtonRaphson = xn => xn - (ecuacion(xn) / derivada(xn));

export function metodoNewtonRaphson(iteracion = 0, xnAnterior = 20.5, resultados = []) {
    const xn = ecNewtonRaphson(xnAnterior);
    const error = Math.abs(xn - xnAnterior);
    const resultado = { xn, iteracion, xnAnterior, error}
    resultados.push(resultado);
    if (error > 10**(-5)) return metodoNewtonRaphson(iteracion + 1, xn, resultados);
    return resultados;
}

/* PASOS NEWTON RAPHSON
 1. Averiguar cuando se cruzan 2**t = 256.000t - 1.571.840
 2. Las dos funciones se cortan en algun punto en el intervalo [20, 21]
 3. Criterio de paro: Error absoluto Con un error menor a 10**(-5)
*/

export function metodoPuntoFijo(iteracion = 0, xnAnterior = 20.5, resultados = []) {
    const xn = despeje(xnAnterior);
    const error = Math.abs(xn - xnAnterior) / Math.abs(xn);
    const resultado = { xn, iteracion, xnAnterior, error}
    resultados.push(resultado);
    if (error > 10**(-5)) return metodoPuntoFijo(iteracion + 1, xn, resultados);
    return resultados;
}

/* PASOS PUNTO FIJO
 1. Encontrar g(x) despejando x en la funcion.
 2. g(x) es continua en el intervalo y el modulo de su derivada es menor a uno por lo que converge
 3. Criterio de paro: Error relativo Con un error menor a 10**(-5)
*/
