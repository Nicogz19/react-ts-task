import {AiOutlinePlus} from 'react-icons/ai'
import { FormEvent, ChangeEvent, useState, useRef } from 'react'
import { Task } from '../interfaces/Task'

interface Props {
    addTask: (task: Task) => void //La funcion addTask al NO retornar nada se le agrega el void
}

const InitialState = {
    title: '',
    description: ''
}

const TaskForm = (props: Props) => {

    const [task, setTask] = useState<Task>(InitialState)
    const inputTitle = useRef<HTMLInputElement>(null)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)  => {
        e.preventDefault()
        props.addTask(task)
        setTask(InitialState)
        inputTitle.current?.focus();
    }

    return (
        <div className='card card-body bg-secondary text-dark'>
        <h1>Add Task</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Write a title' 
                    name='title' 
                    className='form-control mb-3 rounded-0 shadow-none border-0'
                    onChange={(e) => handleInputChange(e)}
                    value={task.title}
                    autoFocus
                    ref={inputTitle}
                />
                <textarea 
                    name='description' 
                    rows={2} 
                    placeholder='Write a Description'
                    className='form-control mb-3 shadow-none border-0'
                    onChange={(e) => handleInputChange(e)}
                    value={task.description}
                />
                <button className='btn btn-primary'>
                    Save
                    <AiOutlinePlus />
                </button>
            </form>
        </div>
    )
}

export default TaskForm