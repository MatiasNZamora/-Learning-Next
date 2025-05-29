'use client';
import { IoTrashOutline } from "react-icons/io5";
import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";

// import * as todosApi from '@/todos/helpers/todos';
import { addTodo, deleteComplete } from "../actions/todo-actions";

export const NewTodo = () => {

    // const router = useRouter();
    const [description, setdescription] = useState('');

    const onSubmit = async(e:FormEvent) => {
        e.preventDefault();

        if( description.trim().length === 0 ) return;
        
        await addTodo(description);
        setdescription('');
        // router.refresh();
    };

    return (
        <form
            onSubmit={ onSubmit }
            className='flex w-full'
        >
            <input 
                onChange={ (e) => setdescription(e.target.value) }
                value={ description }
                type="text"
                className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
                placeholder="¿Qué necesita ser hecho?" 
            />
            <button 
                type='submit' 
                className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
            >
                Crear
            </button>
            <span className='flex flex-1'></span>
            <button
                onClick={ () => deleteComplete() }
                type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
                <IoTrashOutline />
                <span className="ml-2">
                    Borrar completados
                </span>
                
            </button>
        </form>
    );

};