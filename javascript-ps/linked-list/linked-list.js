class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.header =  new Node(null);
        this.tail = new Node(null);
        this.length = 0;
    }
    
    getNthNode(n) {
        //내 코드 크기를 알면 바로 에러 처리 가능!
        if (n > this.length) {
            console.log("indexErrror");
            return
        }
        let current = this.header;
        let index = 0;

        while (index < n){
            current = current.next;
            index = index + 1;
        }

        return current.value;
    }
    //jomacode 코드 크기를 몰라도 에러 처리 할 수 있음;
    getItem(n) {
        let count = 0;
        let current = this.header;
        while (current !== null) {
            console.log(current.value);
            if (count === n){
                return current; 
            }
            current = current.next;
            ++count;
        }
        console.log(`can't find ${n}th value in this linkedList`);
        return false
    }

    searchItem(num) {
        let current = this.header;
        while (current !== null) {
            if (current.value === num){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    insertItem(num,idx){
        if (idx === 0){
            return this.inserItemAtFront(num);
        }

        //지금 index직전 으로 이동
        let current = this.getItem(idx-1)
        if (current === false){
            return 
        }
        console.log("여기",current);
        //지금 index의 노드를 nextNode로 저장
        const nextNode = current.next;

        //직전 노드에 새로운 노드 추가
        current.next = new Node(num);

        //다음 노드에 
        const addedNode = current.next;
        addedNode.next = nextNode;
        console.log(current, addedNode , nextNode);
    
    }

    inserItemAtFront(num){
        const addedNode = new Node(num);
        addedNode.next = this.header;
        this.header = addedNode;
    }
    removeItem(num){
        
        let current = this.header;
        let previous = new Node();
        console.log(current);
        if (current.value === num) {
            current = current.next;
            this.header = current;
            return 
        }

        while (current !== null) {
            previous = current;
            current = current.next;
            console.log(current);
            if (current.value === num) {
                previous.next = current.next;
                current = new Node(null);
            }
        }
    }

}

const testLinkedList = new LinkedList();
testLinkedList.inserItemAtFront(10);
testLinkedList.inserItemAtFront(15);
testLinkedList.inserItemAtFront(20);
console.log(testLinkedList.searchItem(10));
testLinkedList.insertItem(2,5);
testLinkedList.insertItem(3,2);
console.log(testLinkedList.getItem(4));
testLinkedList.removeItem(10);
console.log(testLinkedList.getItem(3));
