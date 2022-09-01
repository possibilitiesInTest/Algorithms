



class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  // ---- Generate linked list ----
  const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);
  
  // ---- Generate linked list ----
  
  const printList = (head) => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    printList(head.next);
  }
  
  // --------- solution -----------
  
  var reverseBetween = function(head, m, n) {
    // init current position at 1
    // init current node at head
    // init start at head
    let currentPos = 1, currentNode = head;
    let start = head;
    

    //while current position is less than m
    // get current node
    // store next value in currentNode
    // increment current position
    while(currentPos < m) {
      start = currentNode;
      currentNode = currentNode.next;
      currentPos++;
    }
    
    // let newList to null, tail to currentNode
    let listSofar = null, tail = currentNode;
    

    // while currentPos >= m && <= n
    // set next to currentNode.next
    // update curN.next as listSoFar
    // set listSofar to current node
    // set current node to stored next value
    // increment current position
    while(currentPos >= m && currentPos <= n) {
      const next = currentNode.next;
      currentNode.next = listSoFar;
      listSofar = currentNode;
      currentNode = next;
      currentPos++;
    }
    
    // set start.next to listSoFar
    // set tail.next to current node
    start.next = listSofar;
    tail.next = currentNode;
    
    // if m > 1
    // return head else
    // return listSoFar
    if(m > 1) {
      return head
    } else {
      return listSofar;
    }
  };