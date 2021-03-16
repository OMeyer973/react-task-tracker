import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState } from "react";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "get food",
      day: "today",
      reminder: true,
    },
    {
      id: 2,
      text: "buy lamborghini",
      day: "eventually",
      reminder: false,
    },
    {
      id: 3,
      text: "do dishes",
      day: "someday",
      reminder: true,
    },
  ]);

  
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 999999) + 1
    setTasks([...tasks, {id, ...task}])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task) => 
        task.id === id ? 
        { ...task, reminder: !task.reminder } :
        task
    ))
  }



  return (
    <div className="container">
      <Header 
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}/>
      {showAddTask ? <AddTask onAdd={addTask}></AddTask> : ""}
      {
        tasks.length > 0 ?
        <Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}/>
        : "No tasks"
      }
    </div>
  );
}

export default App;
