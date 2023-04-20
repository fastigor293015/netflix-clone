import { PrismaClient } from "@prisma/client";

// Избегаем размножения сущностей PrismaClient (из-за hot-reload)
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
