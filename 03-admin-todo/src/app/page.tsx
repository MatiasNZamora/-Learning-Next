import { redirect } from "next/navigation"

export default function page() {

  redirect('/dashboard');

  return (
    <>
      <span className="text-5xl">
        hola mundo
      </span> 
    </>
  )
};
