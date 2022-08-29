
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
    let prev = null;
    let current = head;

    // while current is truthy
    // update next to next after current
    // update current.next to prev(pointing to reversed list)
    // update prev to current(reversed list)
    // update current to next(increment process on next in list)
    while(current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}