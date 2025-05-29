This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Development
pasos para levantar la app en desarrollo

1. Levantar la base de datos 
```
docker-compose up -d
```
2. Renombrar el .env.template a .env
3. Remplazar las variables de entorno
4. Ejecutar ``` npm install ```
5. Ejecutar ``` npm run dev ```
6. Ejecutar comandos de prisma ( npx prisma migrate y prisma generate )
```
npx prisma migrate dev
npx prisma generate 
```
7. Ejecutar Seed para [crear la DB local](localhost:3000/api/seed)

# Prisma Comands
```
npx prisma init
npx prisma migrate dev
npx prisma generate 
```

2. Ejecutar 

