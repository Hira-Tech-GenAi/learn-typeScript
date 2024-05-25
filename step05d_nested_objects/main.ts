/** @format */

type Author = {
  firstName: string;
  lastName: string;
};
type Book = {
  author: string;
  name: string;
};

let myBook: Book = {
  author: {
    firstName: "Zia",
    lastName: "Khan",
  },
  name: "My Best Book",
};
