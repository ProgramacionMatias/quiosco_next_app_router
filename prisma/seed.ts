import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    try {
        await prisma.category.createMany({
            data: categories // Creando en la db los datos de category
        })
        await prisma.product.createMany({
            data: products
        })
    } catch (error) {
        console.log(error)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })

   /*  En Prisma, el seed es un mecanismo que se utiliza para poblar tu base de datos con datos iniciales o de prueba.
     Esto puede incluir datos básicos como usuarios predeterminados, configuraciones iniciales, o datos que necesitas para comenzar el desarrollo de tu aplicación. */