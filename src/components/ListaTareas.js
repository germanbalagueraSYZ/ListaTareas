import React, { useState } from 'react';
import Tarea from './Tarea';

function ListaTareas() {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = () => {
        const nueva = {
            id: Date.now(),
            texto: nuevaTarea,
            completada: false
        };
        setTareas([...tareas, nueva]);
        setNuevaTarea('');
    };

    const toggleCompletada = (id) => {
        const nuevasTareas = tareas.map(tarea => {
            if (tarea.id === id) {
                return { ...tarea, completada: !tarea.completada };
            }
            return tarea;
        });
        setTareas(nuevasTareas);
    };

    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
        setTareas(nuevasTareas);
    };

    return (
        <div>
            <input
                type="text"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button onClick={agregarTarea}>Agregar Tarea</button>
            <div>
                {tareas.map(tarea => (
                    <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        toggleCompletada={toggleCompletada}
                        eliminarTarea={eliminarTarea}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListaTareas;