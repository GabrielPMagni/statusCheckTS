import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class Domain {
    async insert(domain: string) {
        const response = await prisma.domains.create({
            data: {
                url: domain
            },
            select: {
                id: true,
                url: true,
                createdAt: false
            }
        });
        prisma.$disconnect();
        return response;
    }

    async delete(id: number) {
        const response = prisma.domains.delete({
            where: {
                id: id
            },
            select: {
                id: true,
                url: true,
                createdAt: true
            }
        })
        prisma.$disconnect();
        return response;
    }

    async selectById(id: number) {
        const response = prisma.domains.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                url: true,
                createdAt: true
            }
        })
        prisma.$disconnect();
        return response;
    }

    async selectPage(page: number, pageSize: number) {
        const response = prisma.domains.findMany({
            skip: page * pageSize,
            take: pageSize,
            orderBy: {
                createdAt: "asc"
            },
            select: {
                id: true,
                url: true,
                createdAt: false
            }
        })
        prisma.$disconnect();
        return response;
    }
}

export default Domain;