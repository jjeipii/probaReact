import { useState, useEffect } from 'react'
import Pantalla from './Pantalla'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([]);
  const [formData, setFormData] = useState({
    nombre:"",
    tipo:"",
  });
  const [nId, setId] = useState(0);

  const tipo = [["Familiar","bg-red-300"],["Trabajo","bg-blue-300"],["Ocio","bg-green-300"]]


  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({...formData,[name]: value });
  }

  function enviarTarea(event) {
    event.preventDefault();
    const newTarea = {id:nId,  nombre:formData.nombre, tipo:formData.tipo};
    setTareas([...tareas, newTarea]);
    setId(nId+1);
  }
  function deleteTask(id) {
    const tareas2 = tareas.filter((tareas) => tareas.id !== id);
    setTareas(tareas2);
  }

  return (
    <div className='text-center'>
      <h1 className=' block text-3xl my-2  font-semibold'>Tus pedazo tareas</h1>
      <div className='grid grid-cols-6 gap-2 mt-2'>
          <form className='col-start-2 col-span-2  p-2 my-2 text-center' >
            <label htmlFor="idTarea" className="">Tarea:</label>
            <input type="text" id="idTarea" name="nombre" onChange={handleInputChange} className="p-1 border"/>

            <select name="tipo" id="idTipo" defaultValue="" onChange={handleInputChange}>
              <option value=""></option>
              {tipo.map((tipo,key) => <option key={key} value={tipo}>{tipo[0]}</option>)}
            </select>
            <input type="button" disabled={formData.nombre == "" || formData.tipo == 0} name='enviar' value="Enviar" className="border rounder p-1 bg-blue-400 ml-1 text-white" onClick={enviarTarea}/>
          </form>
          <Pantalla valor={tareas} delTask={deleteTask}/>  
      </div>
    </div>
  )
}

export default App
