
/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  // ---- Generate our linked list ----
  const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);
  
  // ---- Generate our linked list ----
  
  const printList = (head) => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    printList(head.next);
  }


const reverseLinkedList = function(head) {
    // init prev as null: final linked list
    // init current as received head
    let listSoFar = null;
    let current = head;

    // while current is truthy
    // store next value
    // update next value to listSoFar
    // store current node as listSoFar
    // update current to stored next value 
    while(current) {
        let next = current.next;
        current.next = listSoFar;
        listSoFar = current;
        current = next;
    }
    return prev;
}