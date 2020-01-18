function groupAdultsByAgeRange(people) {
  const groups = ['20 and younger', '21-30', '31-40', '41-50', '51 and older'];
  
  return groups.reduce((obj, group) => {
    switch (group) {
      case '20 and younger':
        const youngest = people.filter(person => person.age >= 18 && person.age <= 20);
        if(youngest.length) {
          obj[group] = youngest;
        }
        break;

      case '21-30':
        const younger = people.filter(person => person.age > 20 && person.age <= 30);
        if(younger.length) {
          obj[group] = younger;
        }
        break;

      case '31-40':
        const young = people.filter(person => person.age > 30 && person.age <= 40);
        if(young.length) {
          obj[group] = young;
        }
        break;

      case '41-50':
        const older = people.filter(person => person.age > 40 && person.age <= 50);
        if(older.length) {
          obj[group] = older;
        }
        break;

      case '51 and older':
        const oldest = people.filter(person => person.age > 50);
        if(oldest.length) {
          obj[group] = oldest;
        }
        break;
    } 
    return obj;
  }, {})
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;