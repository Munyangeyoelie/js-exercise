//This on books and authors
function Book(name, author) {
  this.title = name;
  this.author = author;
}
const Book1 = new Book("Book 1", "Ngeyo");
const Book2 = new Book("book 2", "Prince");

console.log(Book1.title);

console.log(Book1.author);

console.log(Book2.title);

console.log(Book2.author);

const Book3 = {
  title: "Book 3",
  author: "Ngeyo",
};

console.log(Book3.title);

console.log(Book3.author);
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
//this on personal username
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
const Person1 = new Person("Munyangeyo", "Elie");
const Person2 = new Person("Ishimwe", "Daamming");
console.log(Person1);
console.log(Person2);

//this on login and logout