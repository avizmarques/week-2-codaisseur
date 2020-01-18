function groupAdultsByAgeRange(people) {
  const groups = {
    '20 and younger': [17, 20],
    '21-30': [20, 30],
    '31-40': [30, 40],
    '41-50': [40, 50],
    '51 and older': [50]
  };

  return Object.entries(groups).reduce((obj, group) => {
    groupName = group[0];
    groupLimits = group[1];

    if(groupLimits.length === 1) {
      let persons = people.filter(person => person.age > groupLimits[0]);
      if(persons.length) {
        obj[groupName] = persons;
      }
    } else {
      let persons = people.filter(person => person.age > groupLimits[0] && person.age <= groupLimits[1]);
      if(persons.length) {
        obj[groupName] = persons;
      }
    }
    return obj;
  }, {});
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;