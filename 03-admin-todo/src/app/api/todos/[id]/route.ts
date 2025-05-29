import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";


interface Arg { 
    params: { 
        id: string;
    }
};

const getTodo = async (id:string):Promise<Todo | null> => {
    const todo = await prisma.todo.findFirst({
        where: {id:id}
    });   
    return todo;
};

export async function GET( request:Request, { params }: Arg ) {
    const todo = await getTodo(params.id);
    if(!todo) return NextResponse.json( { message: `TODO ${params.id} not exist ` }, {status: 400} );
    return NextResponse.json(todo); 
};


//*Schema de Validacion para el PUT
const putSchema = yup.object({
    complete: yup.boolean().optional(),
    description: yup.string().optional(),
});

export async function PUT( request:Request, { params }: Arg ) {
    const todo = await getTodo(params.id);
    if( !todo ) return NextResponse.json( { message: `TODO ${params.id} not exist ` }, {status: 400} );

    try {
        const { complete, description, ...rest } = await putSchema.validate( await request.json() );
        const updateTodo = await prisma.todo.update({
            where: { id: params.id },
            data: { complete, description }
        });
        console.log( rest );
        return NextResponse.json(updateTodo); 
    } catch (error) {
        return NextResponse.json(error, {status: 400} ); 
    };

};
