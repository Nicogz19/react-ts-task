import { useState } from 'react';
import reactLogo from '../src/logo.svg'
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './interfaces/Task';

interface Props{
  title?: string //El signo de interrogacion significa que el title es opcional
}

function App(props: Props) {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Learn React',
      description: 'Learn React With Nicolas',
      completed: false
    }
  ])

  const getCurrentTimestamp = (): number => new Date().getTime() 

  const addTask = (task: Task) => setTasks([
    ...tasks, 
    {...task, id: getCurrentTimestamp(), completed: false}
  ])

  const deleteTask = (id: number) => setTasks(tasks.filter(task => task.id !== id))

  return (
    <div className="bg-dark text-white" style={{ height: '100vh ' }}>
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container'> 
          <a href='/' className='navbar-brand'>
            <img src={reactLogo} alt='React Logo' style={{ width: '4rem' }}/>
            {props.title && <h4>{props.title}</h4>}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addTask={addTask}/>
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask}/>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
