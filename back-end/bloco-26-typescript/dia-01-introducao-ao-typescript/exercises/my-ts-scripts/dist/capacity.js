"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.convert = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
function convert(value, baseUnit, convUnit) {
    const units = ['ml', 'cl', 'dl', 'l', 'dal', 'hl', 'kl'];
    if (units.indexOf(baseUnit) === -1 || units.indexOf(convUnit) === -1) {
        throw new Error(`Unidade inválida! As unidades Disponíves são: ${units}.`);
    }
    const convertTable = {
        ml: -3,
        cl: -2,
        dl: -1,
        l: 0,
        dal: 1,
        hl: 2,
        kl: 3,
    };
    return value * (10 ** (convertTable[baseUnit] - convertTable[convUnit]));
}
exports.convert = convert;
;
const exec = () => {
    try {
        const value = readline_sync_1.default.question('Insira um valor a ser convertido: ');
        if (isNaN(Number(value)))
            throw new Error('Valor Inválido');
        const base = readline_sync_1.default.question('Insira sua unidade de partida: ');
        const toConvert = readline_sync_1.default.question('Insira sua unidade destino: ');
        console.log(`${value}${base} equivale a ${convert(Number(value), base, toConvert)}${toConvert}.`);
    }
    catch (e) {
        console.log(e.message);
    }
};
exports.exec = exec;
