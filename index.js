function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else if (typeof collection === "object") {
    for (let key in collection) {
      callback(collection[key], key, collection);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const newCollection = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      newCollection.push(callback(collection[i], i, collection));
    }
  } else if (typeof collection === "object") {
    const objectToArray = Object.values(collection);
    for (let i = 0; i < objectToArray.length; i++) {
      newCollection.push(callback(objectToArray[i], i, objectToArray));
    }
  }
  return newCollection;
}

function myReduce(collection, callback, acc) {
  let accumulator = arguments.length === 3 ? acc : undefined;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (accumulator === undefined && i === 0) {
        accumulator = collection[i];
      } else {
        accumulator = callback(accumulator, collection[i], i, collection);
      }
    }
  } else if (typeof collection === "object") {
    const values = Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      if (accumulator === undefined && i === 0) {
        accumulator = values[i];
      } else {
        accumulator = callback(accumulator, values[i], i, collection);
      }
    }
  }

  return accumulator;
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else if (typeof collection === "object") {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (predicate(collection[key])) {
        return collection[key];
      }
    }
  }

  return undefined;
}

function myFilter(collection, predicate) {
  if (Array.isArray(collection)) {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
    return result;
  } else if (typeof collection === "object") {
    const result = [];
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (predicate(collection[key])) {
        result.push(collection[key]);
      }
    }
    return result;
  }

  return [];
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (typeof collection === "object") {
    return Object.keys(collection).length;
  } else {
    return 0;
  }
}

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  } else if (n >= 0) {
    return array.slice(0, n);
  } else {
    return [];
  }
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else if (n >= 0) {
    return array.slice(-n);
  } else {
    return [];
  }
}

function myKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

function myValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
