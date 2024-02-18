import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "A", amount: 1200, category: "Utilities" },
    { id: 2, description: "B", amount: 500, category: "Health" },
    { id: 3, description: "C", amount: 300, category: "Food" },
    { id: 4, description: "D", amount: 700, category: "Travel" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([
              ...expenses,
              { ...expense, id: expenses[expenses.length - 1].id + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(categeory) => setSelectedCategory(categeory)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
