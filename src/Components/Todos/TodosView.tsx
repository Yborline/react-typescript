import React, { useState, useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import Filter from './Filter';
import Stats from './Stats';

import ITodo from '../../interfaces/Todo.interface';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

const getInitialTodoState = (): ITodo[] => {
  const savedTodos = localStorage.getItem('todos')

  return savedTodos ? JSON.parse(savedTodos) : [];
};


type TAddTodo = (text :string)=> void


const TodosView = () => {
  const [todos, setTodos] = useState<ITodo[]>(getInitialTodoState);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo: TAddTodo = (text:string) => {
    const todo:ITodo = {
      id: uuidv4(),
      text,
      completed: false,
    };

    setTodos(todos => [todo, ...todos]);
  };

  const deleteTodo = (todoId:string) => {
    setTodos(todos => todos.filter(todo => todo.id !== todoId));
  };

  const toggleCompleted = (todoId:string) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const changeFilter = (filter:string) => {
    setFilter(filter);
  };

  const visibleTodos = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  }, [filter, todos]);

  const completedTodoCount = useMemo(() => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  }, [todos]);

  return (
    <>
      <TodoEditor onSubmit={addTodo} />

      <div style={barStyles}>
        <Filter value={filter} onChange={changeFilter} />
        <Stats total={todos.length} completed={completedTodoCount} />
      </div>

      <TodoList
        todos={visibleTodos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
      />
    </>
  );
};

export default TodosView;