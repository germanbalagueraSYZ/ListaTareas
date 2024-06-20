import React from 'react';

function Tarea({ tarea, toggleCompletada, eliminarTarea }) {
    return (
        <div style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
            {tarea.texto}
            <button onClick={() => toggleCompletada(tarea.id)}>Completar</button>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
        </div>
    );
}

export default Tarea;