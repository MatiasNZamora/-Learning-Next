import { Todo } from "@prisma/client";


const sleep = ( seconds: number = 0 ):Promise<boolean> => {
    return new  Promise( (resolve) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000 );
    });
};

export const updateTodo = async( id: string, complete: boolean ):Promise<Todo> => {
    // await sleep(2);

    const body = { complete };
    const dbTodo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then( res => res.json() );
    
    return dbTodo;
};

export const createTodo = async( description:string ):Promise<Todo> => {
    
    const body = { description };
    const newTodo = await fetch('/api/todos/', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then( res => res.json() );    

    return newTodo;
};

export const deleteCompleteTodo = async():Promise<Boolean> => {
    
    await fetch('/api/todos/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then( res => res.json() );    
    
    return true;
};