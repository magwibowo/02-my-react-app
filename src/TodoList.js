import React, { useState } from "react";

// Komponen untuk setiap item dalam daftar tugas
function TodoItem({ task, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-md mb-2">
      <span>{task}</span>
      <button 
        className="bg-red-500 text-white px-2 py-1 rounded-md"
        onClick={onDelete}
      >
        Hapus
      </button>
    </div>
  );
}

// Komponen utama TodoList
function TodoList() {
  const [tasks, setTasks] = useState([]); // State untuk daftar tugas
  const [newTask, setNewTask] = useState(""); // State untuk input tugas baru

  // Menambahkan tugas baru ke daftar
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(""); // Reset input setelah ditambahkan
    }
  };

  // Menghapus tugas dari daftar
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>

      {/* Form untuk menambahkan tugas */}
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 flex-grow rounded-l-lg"
          placeholder="Tambahkan tugas..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
          onClick={addTask}
        >
          Tambah
        </button>
      </div>

      {/* Menampilkan daftar tugas */}
      <div>
        {tasks.length === 0 ? (
          <p className="text-gray-500">Tidak ada tugas</p>
        ) : (
          tasks.map((task, index) => (
            <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
