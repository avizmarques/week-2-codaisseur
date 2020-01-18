function groupAdultsByAgeRange(people) {
  const groups = {
    '20 and younger': [],
    '21-30': [],
    '31-40': [],
    '41-50': [],
    '51 and older': []
  }

  const youngest = people
    .filter(person => person.age <= 20)
    .reduce((grouped, person) => {
      grouped['20 and younger'].push(person);
      return grouped;
    }, groups);

  const young = people
    .filter(person => person.age > 20 && person.age <= 30)
    .reduce((grouped, person) => {
      grouped['21-30'].push(person);
      return grouped;
    }, groups);

  const middle = people
    .filter(person => person.age > 30 && person.age <= 40)
    .reduce((grouped, person) => {
      grouped['31-40'].push(person);
      return grouped;
    }, groups);

  const older = people
    .filter(person => person.age > 40 && person.age <= 50)
    .reduce((grouped, person) => {
      grouped['41-50'].push(person);
      return grouped;
    }, groups);

  const oldest = people
    .filter(person => person.age > 50)
    .reduce((grouped, person) => {
      grouped['51 and older'].push(person);
      return grouped;
    }, groups);

  return groups;
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;