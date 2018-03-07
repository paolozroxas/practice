/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
  var node = this.makeNode(value);

  if (this.head === null) { //no nodes yet
    this.head = node;
    this.tail = node;
  } else { //there's already a node there
    var ptr = this.head;
    while (ptr.next !== null) {
      ptr = ptr.next;
    }
    ptr.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function() {
  if (this.head === null) {
    return null;
  } else if (this.head.next === null) {
    var result = this.head.value;
    this.head = null;
    this.tail = null;
    return result;
  } else {
    var result = this.head.value;
    this.head = this.head.next;
    return result;
  }
};

LinkedList.prototype.contains = function(target) {
  if (this.head === null) {
    return false;
  } else {
    var ptr = this.head;
    while (ptr !== null) {
      if (ptr.value === target) {
        return true;
      }
      ptr = ptr.next;
    }
    return false;
  }
};

LinkedList.prototype.makeNode = function(value) {
  return { value: value, next: null };
};




// EXAMPLE USAGE:
// var list = new LinkedList();
// console.log(list.tail);         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// console.log(list.head.value);   //yields '4';
// console.log(list.contains(5));  //yields 'true';
// console.log(list.contains(6));  //yields 'false';
// console.log(list.removeHead()); //yields '4';
// console.log(list.tail.value);   //yields '5';
// console.log(list.removeHead()); //yields '5';
// console.log(list.removeHead()); //yields 'null';
