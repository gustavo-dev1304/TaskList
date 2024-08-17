import React from 'react'

// Interface
import { ITask } from '../interface/task'

// CSS 
import style from "../component/tasklist.module.css"

interface Props {
  tasklist: ITask[]
  handleDelete(id: number): void
  handleEdit(task: ITask): void
}

const Tesklist = ({ tasklist, handleDelete, handleEdit }: Props) => {
  return (
    <>
    {tasklist.length > 0? (
      tasklist.map((task) => (
        <div key={task.id} className={style.task}>
          <div className={style.datails}>
            <h4>{task.title}</h4>
            <p>Dificuldade: {task.difficulty}</p>
          </div>
          <div className={style.action}>
            <i className='bi bi-pencil' onClick={() => handleEdit(task)}></i>
            <i className='bi bi-trash' onClick={() => {handleDelete(task.id)}}></i>
          </div>
        </div>
      ))
    ) : (
      <p>nao ha tarefas cadastradas</p>
    )}
    </>
  )
}

export default Tesklist