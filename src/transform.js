function groupAdultsByAgeRange(array) {
    let obj = {};
  
    array.filter((item) => {
      if (item.age >= 18 && item.age <= 20) {
        if (!obj['20 and younger']) {
          obj['20 and younger'] = [];
        }
        obj['20 and younger'].push(item);
      }
  
      if (item.age >= 21 && item.age <= 30) {
        if (!obj['21-30']) {
          obj['21-30'] = [];
        }
        obj['21-30'].push(item);
      }
  
      if (item.age >= 31 && item.age <= 40) {
        if (!obj['31-40']) {
          obj['31-40'] = [];
        }
        obj['31-40'].push(item);
      }
  
      if (item.age >= 41 && item.age <= 50) {
        if (!obj['41-50']) {
          obj['41-50'] = [];
        }
        obj['41-50'].push(item);
      }
  
      if (item.age >= 51) {
        if (!obj['51 and older']) {
          obj['51 and older'] = [];
        }
        obj['51 and older'].push(item);
      }
    });
  
    return obj;
  }
  
  module.exports = {
    groupAdultsByAgeRange: groupAdultsByAgeRange
  };