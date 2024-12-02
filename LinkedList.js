class Node {
    constructor(value = null, next = null) {
        this.data = value;
        this.next = next;
    }
}
export default class LinkedList {
    #head = null;
    #tail = null;
    constructor() { }
    // append(value)adiciona um novo nó contendo valueao final da lista
    append(value) {
        const newNode = new Node(value);
        if (!this.#head) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            this.#tail = newNode;
        }
    }
    // prepend(value)adiciona um novo nó contendo valueno início da lista
    prepend(value) {
        const newNode = new Node(value);
        if (!this.#head) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.next = this.#head;
            this.#head = newNode;
        }
    }
    // sizeretorna o número total de nós na lista
    size() {
        let current = this.#head;
        let count = 0;
        while (current) {
            current = current.next;
            count++;
        }
        return count;
    }
    // headretorna o primeiro nó da lista
    head() {
        return this.#head.data;
    }
    // tailretorna o último nó da lista
    tail() {
        return this.#tail.data;
    }
    // at(index)retorna o nó no dadoindex
    at(index) {
        if (index < 0 || index >= this.size()) {
            throw new Error("Índice fora dos limites da lista")
        }
        let current = this.#head;
        let count = 0;
        if (index === 0) return current.data;
        while (count < index) {
            count++
            current = current.next;
        }
        return current.data;
    }
    // pop remove o último elemento da lista
    pop() {
        if (!this.#head) return;
        if (this.#head == this.#tail) {
            this.#head = null;
            this.#tail = null;
            return;
        }

        let current = this.#head;
        while (current.next != this.#tail) {
            current = current.next;
        }
        current.next = null;
        this.#tail = current;
    }
    // contains(value)retorna verdadeiro se o valor passado estiver na lista e, 
    // caso contrário, retorna falso.
    contains(value){
        let current = this.#head;
        while (current) {
            if(current.data == value){
                return true;
            }
            current = current.next;
        }
        return false;
    }
    // find(value)retorna o índice do nó que contém o valor, 
    // ou nulo se não for encontrado.
    find(value){
        let current = this.#head;
        let count = 0;
        while (current) {
            if(current.data == value){
                return count;
            }
            current = current.next;
            count++;
        }
        return null;
    }

    // toString representa seus objetos
    // ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        let list = "Lista: ";
        let current = this.#head;
        while (current) {
            list += `${current.data} -> `
            current = current.next;
        }
        return list + "Null";
    }
}

