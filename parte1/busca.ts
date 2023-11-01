import * as fs from 'fs'; // módulo integrado do Node.js para interação com o sistema de arquivos

interface Grupo {
  nome: string;
  usuarios?: string[];
  subGrupos?: Grupo[];
}

export class Grupos {
  private grupos: Grupo[] = [];

  constructor() {}

  public carrega(): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.readFile('grupos.json', 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          try {
            const gruposData = JSON.parse(data);
            this.grupos = gruposData.grupos;
            resolve();
          } catch (error) {
            reject(error);
          }
        }
      });
    });
  }

  public busca(nomeUsuario: string, callback: (grupos: Grupo[]) => void): void {
    const gruposEncontrados: Grupo[] = [];

    const buscaRecursiva = (grupo: Grupo) => {
      if (
        grupo.usuarios &&
        grupo.usuarios.some((usuario) => usuario.includes(nomeUsuario))
      ) {
        gruposEncontrados.push(grupo);
      }

      if (grupo.subGrupos) {
        for (const subGrupo of grupo.subGrupos) {
          buscaRecursiva(subGrupo);
        }
      }
    };

    for (const grupo of this.grupos) {
      buscaRecursiva(grupo);
    }

    callback(gruposEncontrados);
  }
}
