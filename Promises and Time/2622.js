/* Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys. */

// CACHE    WITH TIME LIMIT 

class TimeLimitedCache {
    constructor() {
      this.cache = new Map();
    }
  
    set(key, value, duration) {
      const keyExist = this.cache.get(key);
      if (keyExist)
        clearTimeout(keyExist.timer);
      const timer = setTimeout(() => this.cache.delete(key), duration);
      this.cache.set(key, { value, timer });
      return Boolean(keyExist);
    }
  
    get(key) {
      return this.cache.has(key) ? this.cache.get(key).value : -1;
    }
  
    count() {
      return this.cache.size;
    }
  }
  
  var obj = new TimeLimitedCache();
  console.log(obj.set(1, 42, 1000)); // false
  console.log(obj.get(1)); // 42
  console.log(obj.count()); // 1