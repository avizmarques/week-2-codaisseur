function groupAdultsByAgeRange(people) {
  const groups = ['20 and younger', '21-30', '31-40', '41-50', '51 and older'];
  
  return groups.reduce((obj, group) => {
    switch (group) {
      case '20 and younger':
        let youngest = people.filter(person => person.age <= 20);
        if (youngest.length) {
          obj[group] = youngest;
        }
        break;

      case '21-30':
        let younger = people.filter(person => person.age > 20 && person.age <= 30);
        if(younger.length) {
          obj[group] = younger;
        }
        break;

      case '31-40':
        let young = people.filter(person => person.age > 30 && person.age <= 40);
        if(young.length) {
          obj[group] = young;
        }
        break;

      case '41-50':
        let older = people.filter(person => person.age > 40 && person.age <= 50);
        if(older.length) {
          obj[group] = older;
        }
        break;

      case '51 and older':
        let oldest = people.filter(person => person.age > 50);
        if(oldest.length) {
          obj[group] = oldest;
        }
        break;
    } 
    return obj;
  }, {})
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;