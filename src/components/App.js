import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTaskDelete = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelect={handleCategoryFilter} selected={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks.filter((task) => selectedCategory === "All" || task.category === selectedCategory)} onDelete={handleTaskDelete} />
    </div>
  );
}

export default App;