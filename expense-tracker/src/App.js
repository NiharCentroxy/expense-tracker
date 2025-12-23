import { useState, useEffect } from "react";
import { supabase } from "./supabase";

function App() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);

  async function addExpense() {
    await supabase.from("expenses").insert([
      { amount, category, note, expense_date: date }
    ]);
    fetchExpenses();
  }

  async function fetchExpenses() {
    const { data } = await supabase
      .from("expenses")
      .select("*")
      .order("expense_date", { ascending: false });
    setExpenses(data || []);
  }

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Expense Tracker</h2>

      <input placeholder="Amount" onChange={e => setAmount(e.target.value)} />
      <input placeholder="Category" onChange={e => setCategory(e.target.value)} />
      <input placeholder="Note" onChange={e => setNote(e.target.value)} />
      <input type="date" onChange={e => setDate(e.target.value)} />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map(e => (
        <div key={e.id}>
          ₹{e.amount} — {e.category} — {e.expense_date}
        </div>
      ))}
    </div>
  );
}

export default App;
