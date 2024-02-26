import "./App.css";

import ExpenseEntryItem from "./Components/ExpenseEntryItem";

function App() {
  const items = [
    {
      id: 1,
      name: "Pizza",
      amount: 80,
      spendDate: "2024-01-12",
      category: "Food",
    },
    {
      id: 2,
      name: "Grape Juice",
      amount: 30,
      spendDate: "2024-01-14",
      category: "Food",
    },
    {
      id: 3,
      name: "Cinema",
      amount: 190,
      spendDate: "2024-01-15",
      category: "Entertainment",
    },
    {
      id: 4,
      name: "Java Script Programming Book",
      amount: 200,
      spendDate: "2024-01-18",
      category: "Academic",
    },
    {
      id: 5,
      name: "Mango Juice",
      amount: 50,
      spendDate: "2024-01-19",
      category: "Food",
    },
    {
      id: 6,
      name: "Dress",
      amount: 1140,
      spendDate: "2024-01-21",
      category: "Cloth",
    },
    {
      id: 7,
      name: "Tour",
      amount: 2200,
      spendDate: "2024-01-23",
      category: "Entertainment",
    },
    {
      id: 8,
      name: "Meals",
      amount: 150,
      spendDate: "2024-01-25",
      category: "Food",
    },
    {
      id: 9,
      name: "Mobile",
      amount: 14500,
      spendDate: "2024-01-27",
      category: "Gadgets",
    },
    {
      id: 10,
      name: "Exam Fees",
      amount: 2000,
      spendDate: "2024-01-30",
      category: "Academic",
    },
  ];

  return (
    <div className="App">
      <ExpenseEntryItem items={items} />
    </div>
  );
}

export default App;
