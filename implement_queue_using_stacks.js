// Problem: https://leetcode.com/problems/implement-queue-using-stacks/
// Solution: https://leetcode.com/submissions/detail/1074593424/
// Runtime: 46 ms, faster than 81.46% of JavaScript online submissions for Two Sum.
// Memory Usage 41 MB, less than 98.57% of JavaScript online submissions for Two Sum.
// O(n) time, O(n) space

class MyStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top.value;
  }
  push(value) {
    const newNode = {
      value,
      next: null,
    };
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) return null;
    if (this.top === this.bottom) this.bottom = null;
    const node = this.top;
    this.top = this.top.next;
    this.length--;
    return node.value;
  }
  get size() {
    return this.length;
  }
  get empty() {
    return this.length === 0;
  }
}

class MyQueue {
  constructor() {
    this.s1 = new MyStack();
    this.s2 = new MyStack();
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.s1.push(x);
  }
  /**
   * @return {number}
   */
  pop() {
    if (this.s1.length === 0) return null;
    else if (this.s1.length === 1) {
      return this.s1.pop();
    }
    while (!this.s1.empty) {
      this.s2.push(this.s1.pop());
    }
    while (!this.s2.empty) {
      this.s1.push(this.s2.pop());
    }
    return node;
  }
  /**
   * @return {number}
   */
  peek() {
    if (this.s1.length === 0) return null;
    else if (this.s1.length === 1) {
      return this.s1.peek();
    }
    while (!this.s1.empty) {
      this.s2.push(this.s1.pop());
    }
    const node = this.s2.peek();
    while (!this.s2.empty) {
      this.s1.push(this.s2.pop());
    }
    return node;
  }
  /**
   * @return {boolean}
   */
  empty() {
    return this.s1.length === 0;
  }
}
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
