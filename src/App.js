// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Person from './components/Person';
import MessageComponent from './components/MessageComponent';
// import CounterComponent from './components/CounterComponent';
import NewExpense from './components/NewExpense';
import ListComponent from './components/ListComponent';
import { useState } from 'react';
//import HelloComponent from './components/HelloComponent';



var dummy_expenses = [
  {id:1,expDate:new Date(2020,12,15), expTitle:"TV Unit", expAmount:"RS 45000"},
  {id:2,expDate:new Date (2021,10,25), expTitle:"Vacation", expAmount:"RS 125000"},
  {id:3,expDate:new Date (2019-1,15), expTitle:"Donation", expAmount:"RS 50000"},
  {id:4,expDate:new Date (2022,11,9), expTitle:"Renovation", expAmount:"RS 250000"}
]



function App() {

  let [expenses,setExpenses] = useState (dummy_expenses)

  const addExpenseHandler = expense => {
    //console.log("In App component ", expense)
     setExpenses(prev => {return[expense , ...prev]})
  }

  return (
    <div className="App">
      <h1>Expense Tracker App</h1>
      {/* <ListComponent/> */}

      {/* //<CounterComponent/> */}
      {/* <MessageComponent/> */}
      <NewExpense onAddExpense = {addExpenseHandler}/>

      {expenses.map(expense => 
              (
                 <ExpenseItem key={expense.id}
                    expDate={expense.expDate} 
                    expTitle={expense.expTitle}
                   expAmount={expense.expAmount}/>
              )
            )
            }

      {/* <ExpenseItem expDate={expenses[0].expDate} expTitle={expenses[0].expTitle} expAmount={expenses[0].expAmount}/>
      <ExpenseItem expDate={expenses[1].expDate} expTitle={expenses[1].expTitle} expAmount={expenses[1].expAmount}/>
      <ExpenseItem expDate={expenses[2].expDate} expTitle={expenses[2].expTitle} expAmount={expenses[2].expAmount}/>
      <ExpenseItem expDate={expenses[3].expDate} expTitle={expenses[3].expTitle} expAmount={expenses[3].expAmount}/> */}

      {/* <Person name = "Shruti" age="21"/>
      <Person name = "Sanket" age="25"/> */}
    
      {/* <MessageComponent/> */}
    </div>
  );
}

export default App;