//  对象深拷贝
export function cloneObj(obj) {
  const newobj = obj instanceof Array ? [] : {};
  if (typeof obj !== 'object') {
    return obj;
  } else {
    for (const key of Object.keys(obj)) {
      const val = obj[key];
      // typeof null === 'object'
      if (val === null) {
        newobj[key] = val;
      } else {
        newobj[key] = typeof val === 'object' ? cloneObj(val) : val;
      }
    }
  }
  return newobj;
}