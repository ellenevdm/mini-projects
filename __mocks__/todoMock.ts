export const mockAddTodo = jest.fn();
export const mockAddCategory = jest.fn();
export const mockDeleteTodo = jest.fn();
export const mockHandleSubmit = jest.fn();
export const mockCategories = [
  "Work",
  "Personal",
  "Shopping",
  "Fitness",
  "Hobbies",
  "Finance",
];
export const mockTodo = { id: 1, text: "Washing", category: "General" };
export const mockEmptyTodo = { id: 2, text: "", category: "Work" };
export const mockTodos = [
  { id: 1, text: "Washing", category: "Personal" },
  { id: 2, text: "Shopping", category: "Personal" },
  { id: 3, text: "Meeting", category: "Work" },
  { id: 4, text: "Gym", category: "Fitness" },
  { id: 5, text: "Clothes", category: "Shopping" },
  { id: 6, text: "Budgeting", category: "Finance" },
  { id: 7, text: "Gardening", category: "Hobbies" },
  { id: 8, text: "Cooking", category: "Personal" },
  { id: 9, text: "Emails", category: "Work" },
  { id: 10, text: "Reading", category: "Hobbies" },
];

export const mockWithFalseTodo = [
  { id: 1, text: "Washing", category: "General" },
  { id: 2, text: "Shower", category: "Personal" },
  { id: 3, text: "Meeting", category: "Work" },
];
