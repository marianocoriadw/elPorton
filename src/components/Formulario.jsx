import React, { useContext, useState} from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Context } from '../context/Context';


function Formulario() {
//Declaracion de estados
const [fin , setFin] = useState(false)
const { register , handleSubmit , formState:{errors}} = useForm()
// Importacion de useContext 
const  {finalizarCompra} = useContext(Context)


//Funcion para pasar por parametros los datos de formulario
const enviar = (data) => {
    finalizarCompra(data)
    setFin(!fin)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra existosa',
        showConfirmButton: false,
        timer: 1500
      })
}

  return (
    <div className='pt-20'>

    <div className='grid grid-cols-3 w-[90%] lg:w-[35%] mx-auto mb-20 rounded-xl shadow-xl h-full mt-20 justify-center bg-gray-300 gap-5'>
        {/* Titulo del formulario */}
        <h1 className='grid col-span-3 text-center pt-5  text-3xl text-black'>Completa tus datos</h1>
        {/* Formulario */}
        <form onSubmit={handleSubmit(enviar)}
        className='grid col-span-3 justify-center gap-2 mx-auto'>
            <div className='flex flex-col text-2xl gap-2'>
                <label>Nombre</label>
                <input type="text" 
                {...register('nombre' , {
                    required: true
                })}
                className='rounded px-3' />
                {errors.nombre?.type === 'required' && <p className='text-xl text-[red]'>Este campo es necesario</p>}
            </div>
            <div className='flex flex-col  text-2xl gap-1'>
                <label>Apellido</label>
                <input type="text"
                {...register('apellido' , {
                    required: true
                })} 
                className='rounded px-3'/>
                {errors.apellido?.type === 'required' && <p className='text-xl text-[red]'>Este campo es necesario</p>}
            </div>
            <div className='flex flex-col text-2xl gap-1'>
                <label>Telefono</label>
                <input type="number"
                {...register('telefono' , {
                    required: true
                })} 
                className='rounded px-3'/>
                 {errors.telefono?.type === 'required' && <p className='text-xl text-[red]'>Este campo es necesario</p>}
            </div>
            <div className='text-center m-5 mb-8 p-2 text-2xl rounded-xl text-black font-bold border-black bg-[#eed763]'>
                <input type="submit" name='enviar' className='cursor-pointer'/>
            </div>
            {/* Proceso una vez terminada la compra */}
            { fin ?
             <div>
                <p className='text-center text-2xl text-black'>Vovler al menu</p>
               <Link to='/'>
                <div className='grid col-span-3 justify-center'>
                    <button className=' m-2 mb-8 p-2 text-2xl rounded-xl text-black font-bold border-black bg-[#eed763]'>Volver</button>
                </div>
               </Link>
            </div> : null}

        </form>
      
    </div>
    </div>
  )
}

export default Formulario
