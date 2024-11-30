const linkedList = function () {
    let headNode = null;
    let tailNode = null;

    const node = (value = null) => ({ data: value, next: null });

    // adiciona um novo nó contendo valueao final da lista 
    // O(1)
    const append = (value) => {
        const addEnd = node(value)
        if (headNode == null) {
            headNode = addEnd;
            tailNode = addEnd;
        }
        else {
            tailNode.next = addEnd;
            tailNode = addEnd;
        }
    }
    // }prepend(value)adiciona um novo nó contendo valueno início da lista
    // O(1)
    const prepend = (value) => {
        const addFist = node(value);
        if (headNode == null) {
            headNode = addFist;
            tailNode = addFist;
        } else {
            addFist.next = headNode;
            headNode = addFist;
        }
    }
    // retorna o número total de nós na lista
    const size = () => {
        let count = 0;
        let current = headNode;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
    // headretorna o primeiro nó da lista
    const head = () => {
        return headNode.data;
    }
    // tailretorna o último nó da lista
    const tail = () => {
        return tailNode.data;
    }
    // at(index)retorna o nó no dadoindex
    const at = (index) => {
        if (index <= 0) return `Nao e permitido 0 ou negativo!`;
        if (index <= 0) return `Nao e permitido 0 ou negativo!`;
        if (index == null) return headNode.data;

        const tamanho = size();
        if (index > tamanho) return `Lista tem apenas ${size()} itens `;

        let current = headNode;
        while (--index) {
            current = current.next;
        }
        return current.data;
    }
    // popremove o último elemento da lista
    const pop = () => {
        if (!headNode) return null;
        if (headNode == tailNode) {
            const aux = headNode;
            headNode = null
            tailNode = null;
            return `Este Nó ${aux.data} foi REMOVIDO`;
        }
        let current = headNode;
        while (current.next != tailNode) {
            current = current.next;
        }
        const aux = tailNode
        tailNode = current;
        tailNode.next = null;

        return `Este Nó ${aux.data} foi REMOVIDO`;
    }
    // contains(value)retorna verdadeiro se o valor passado estiver na lista e, caso contrário, retorna falso.
    const contains = (value) => {
        let current = headNode;

        while (current) {
            if (current.data === value) return true;
            current = current.next
        }

        return false;
    }
    // find(value)retorna o índice do nó que contém o valor, ou nulo se não for encontrado.
    const find = (value) => {
        let current = headNode;
        let index = 0;
        while (current) {
            if (current.data === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return "Não foi encontrado";
    }
    // representa seus objetos LinkedList Para strings
    const toString = () => {
        if (!headNode) return "Lista -> Null";
        let result = "Lista ->";
        let current = headNode;
        while (current) {
            result += ` ${current.data} -> `;
            current = current.next;
        }
        return result + "Null";
    }

    return { append, prepend, size, head, tail, at, pop, contains, find, toString };
};

export default linkedList;


// list.prepend(3);
// list.prepend(2);
// list.append(4);
// list.prepend(1);
// console.log(list.toString()); // Saída: 10 -> 20 -> 30 -> null
// console.log(list.size());
// console.log("Primeiro e ultimo No da lista");
// console.log(list.head());
// console.log(list.tail());
// console.log(list.at());
// console.log("remove")
// console.log(list.pop());
// console.log(list.contains(3));
// console.log(list.contains(4));
// console.log(list.find(1));
