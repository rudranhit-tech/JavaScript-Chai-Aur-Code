const students = [
  { name: "Sourav", id: 242 },
  { name: "Rudra", id: 241 },
  { name: "Ayush", id: 243 },
];

// console.log(students.sort((a, b) => a.id - b.id));
console.log(students.sort((a, b) => a.name.localeCompare(b.name)));
