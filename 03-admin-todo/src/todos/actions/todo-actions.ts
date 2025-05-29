'use server';
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";
// import { NextResponse } from "next/server";


export const sleep = async( seconds:number = 0 ) => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(true); 
        }, seconds * 1000 );
    });
};

export const toggleTodo = async( id: string, complete: boolean ):Promise<Todo> => {

    await sleep(3); //simulo una conexion lenta.

    const todo = await prisma.todo.findFirst({ where: {id} });

    if(!todo) throw `task with ${id} does not exist`;

    const updateTodo = await prisma.todo.update({
        where: { id: id },
        data: { complete: complete }
    });

    revalidatePath('/dashboard/server-todo');

    return updateTodo;
};


export async function addTodo( description:string ) {
    
    try {
        const todo = await prisma.todo.create({data: { description }});
        revalidatePath('/dashboard/server-todo');
        return todo;
    } catch (error) {
        return {
            message: 'Error creando todo'
        };
    };

};

export async function deleteComplete():Promise<void> {
    
    try {
        await prisma.todo.deleteMany({ where: { complete: true } });
        revalidatePath('/dashboard/server-todo'); 
    } catch (error) {
        console.log(error, 'error al borrar los todos');
    };

};