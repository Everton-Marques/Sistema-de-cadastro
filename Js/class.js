export class Usuario {
    #nome
    #email
    constructor(nomeIn, emailIn, idIn = null) {
        this.#email = emailIn;
        this.#nome = nomeIn;
        this.id = idIn
    }
    get nome() {
        return this.#nome
    }
    get email() {
        return this.#email
    }
    //Manipulação
     static Verificação(nome, email) {
        if (nome === "" || email === "") {
            return false;
        } else{
            return true;
        }

    }

}