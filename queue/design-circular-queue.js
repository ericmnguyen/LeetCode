/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queueLength = k;
  this.queue = [];
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.queue.length >= this.queueLength) return false;
  this.queue.push(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (!this.queue.length) {
    return false;
  }
  this.queue.shift();
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.queue.length) {
    return this.queue[0];
  }
  return -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length) {
    return this.queue[this.queue.length - 1];
  }
  return -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  if (this.queue.length) {
    return false;
  }
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  if (this.queue.length === this.queueLength) {
    return true;
  }
  return false;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
