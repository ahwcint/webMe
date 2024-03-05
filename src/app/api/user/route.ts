import { randomUUID } from 'crypto';
import { PrismaClient, Prisma } from '@prisma/client';

const API_PATH_NAME = process.env.API_PATH_NAME;
const prisma = new PrismaClient();

export async function GET() {
  return Response.json({ auth: true }, { status: 401 });
}

export async function POST(request: Request) {
  const data = await request.json();
  const userCreate = await prisma.userWebMe.create({
    data: {
      userId: randomUUID(),
      username: data.username,
      password: data.password,
    },
  });
  return Response.json({ data, userCreate });
}
