function Pantalla({valor, delTask}) {
    if (valor.length == 0) {
        return (
            <div className="col-start-4 col-span-2 text-center h-[30px] my-2">No hi ha tareas encara</div>
        )
    }

    return(
        <> 
            <div className="col-start-4 col-span-2 text-center p-1 my-2">
                {valor.map(elm => <div className={`grid grid-cols-4 border ronded mb-2 ${elm.tipo.split(',')[1]}`} key={elm.id}><span className="col-span-3 p-1">{elm.nombre}</span><span className="p-1" onClick={()=>delTask(elm.id)}>X</span></div>)}
            </div>
        </>
    )
}   
export default Pantalla;