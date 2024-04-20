import { useState } from "react"


export default function TaskApp() {
    const [nameTask, setnameTask] = useState([
        'tập thể dục',
        'đi đào vàng',
        'đi chơi'
    ])
    const [newTask, setnewTask] = useState('')
    const [doneTask, setdoneTask] = useState([])
    const [undoTaskList, setundoTask] = useState([])
    const [findIndex, setFindIndex] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (findIndex != 0) {
            nameTask[findIndex - 1] = newTask
            setnameTask(nameTask)
            setFindIndex(0)
            setnewTask('')
        } else {
            if (newTask) {
                setnameTask([
                    ...nameTask,
                    newTask
                ])
                console.log(newTask)
                setnewTask('')
            }

        }
    }

    const removeTask = (task) => {
        let newTaskList = nameTask.filter((item) => item != task)
        setnameTask(newTaskList)
    }
    const findTask = (task, index) => {
        setFindIndex(index + 1)
        setnewTask(task)
    }
    const moveTask = (index) => {
        const moveDoneTask = nameTask.splice(index, 1)
        setdoneTask([...doneTask, moveDoneTask])
    }
    const undoTask = (task, index) => {
        let undoTaskList = nameTask.splice(nameTask.length, 0, task)
        setundoTask([...nameTask, undoTaskList])
        doneTask.splice(index, 1)
        setdoneTask(doneTask)

    }
    const handleNameTask = () => {
        setnewTask('')
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text"
                    onInput={(e) => setnewTask(e.target.value)}
                    value={newTask}
                    id="task" />
                <button type="submit">add</button>
                {newTask && <button onClick={handleNameTask}>cancel</button>}
            </form>
            <ol>
                <ul className="list-group-item">
                    {
                        nameTask?.map((task, index) => (
                            <li key={task}
                                className="d-flex justify-content-between">
                                <button onClick={() => moveTask(index)}
                                >
                                    done
                                </button>
                                {task}
                                <button onClick={() => removeTask(task)}>x</button>
                                <button onClick={() => findTask(task, index)}>edit</button>
                            </li>
                        )
                        )
                    }
                </ul>
                <ul className="list-group-item">
                    {
                        doneTask?.map((task, index) => (
                            <li key={task}
                                className="list-group-item list-group-item-danger d-flex justify-content-between">
                                <button onClick={() => undoTask(task, index)}
                                >
                                    undo
                                </button>
                                {task}
                                <button disabled>x</button>
                                <button disabled>edit</button>
                            </li>
                        ))
                    }
                </ul>
            </ol>
        </div>
    )
}