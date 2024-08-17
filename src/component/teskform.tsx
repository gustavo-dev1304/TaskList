import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'

// CSS
import styles from"./teskform.module.css"

// Interface
import { ITask } from '../interface/task';

interface Props {
  btnText: string
  tasklist: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  task?: ITask | null
  handleUpdate?(id: number, title: string, difficulty: number): void
}

const Teskform = ({btnText, tasklist, setTaskList, task, handleUpdate}: Props) => {
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  useEffect(() => {
    if(task) {
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  }, [task] )

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(handleUpdate) {
      handleUpdate(id, title, difficulty)
    } else {

    const id = Math.floor(Math.random() * 1000) 

    const newTask: ITask = {id, title, difficulty}

    setTaskList!([...tasklist, newTask])

    setTitle("")
    setDifficulty(0)

    console.log(tasklist)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value)
    } else {
      setDifficulty(parseInt(e.target.value))
    }
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor='title'>Titulo:</label>
        <input type="text" name="title" placeholder='Titulo da tarefa' onChange={handleChange} value={title}></input>
      </div>
      <div className={styles.input_container}>
        <label htmlFor='difficulty'>Dificuldade:</label>
        <input type="text" name="difficulty" placeholder='Dificuldade da tarefa'  onChange={handleChange} value={difficulty}></input>
      </div>
      <input type='submit' value={btnText}></input>
    </form>
  )
}

export default Teskform

