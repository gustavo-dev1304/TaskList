import React, { useState } from 'react';

// components
import Header from './component/header';
import Footer from './component/footer';
import Teskform from './component/teskform';
import Tesklist from './component/tesklist';
import Modal from './component/modal';

// CSS
import styles from "./app.module.css"

// Interface
import { ITask } from './interface/task';

function App() {
  const [tasklist, setTasklist] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTasklist(
      tasklist.filter(task => {
        return task.id !== id;
      })
    )

  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if(modal) {
      if(display) {
        modal.classList.remove("hide");
      } else {
        modal.classList.add("hide");
      }
    } else {
      console.error("Modal não encontrado");
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskUpdate(task)
  }

  const upDateTask = (id: number, title: string, difficulty: number) => {
    const updatetask: ITask = {id, title, difficulty}
    const updateditens = tasklist.map((task) => {
      return task.id === updatetask.id ? updatetask : task
    })

    setTasklist(updateditens)
    hideOrShowModal(false)
  }

  return (
    <div>
      <Modal children={<Teskform btnText='Editar Tarefa' tasklist={tasklist} setTaskList={setTasklist} handleUpdate={upDateTask}/>} />
      <Header />
      <main className={styles.main}>
        <div> 
          <h3>O que você vai fazer?</h3>
          <Teskform btnText='Criar Tarefa' tasklist={tasklist} setTaskList={setTasklist} />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <Tesklist tasklist={tasklist} handleDelete={deleteTask} handleEdit={editTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
