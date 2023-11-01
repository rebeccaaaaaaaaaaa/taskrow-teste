"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grupos = void 0;
var fs = require("fs"); // módulo integrado do Node.js para interação com o sistema de arquivos
var Grupos = /** @class */ (function () {
    function Grupos() {
        this.grupos = [];
    }
    Grupos.prototype.carrega = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fs.readFile('grupos.json', 'utf8', function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    try {
                        var gruposData = JSON.parse(data);
                        _this.grupos = gruposData.grupos;
                        resolve();
                    }
                    catch (error) {
                        reject(error);
                    }
                }
            });
        });
    };
    Grupos.prototype.busca = function (nomeUsuario, callback) {
        var gruposEncontrados = [];
        var buscaRecursiva = function (grupo) {
            if (grupo.usuarios &&
                grupo.usuarios.some(function (usuario) { return usuario.includes(nomeUsuario); })) {
                gruposEncontrados.push(grupo);
            }
            if (grupo.subGrupos) {
                for (var _i = 0, _a = grupo.subGrupos; _i < _a.length; _i++) {
                    var subGrupo = _a[_i];
                    buscaRecursiva(subGrupo);
                }
            }
        };
        for (var _i = 0, _a = this.grupos; _i < _a.length; _i++) {
            var grupo = _a[_i];
            buscaRecursiva(grupo);
        }
        callback(gruposEncontrados);
    };
    return Grupos;
}());
exports.Grupos = Grupos;
