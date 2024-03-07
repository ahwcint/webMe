import { randomUUID } from 'crypto';
import { PrismaClient, Prisma } from '@prisma/client';

const API_PATH_NAME = process.env.API_PATH_NAME;
const prisma = new PrismaClient();

export async function GET() {
  return Response.json({ auth: true }, { status: 401 });
}

export async function POST(request: Request) {
  const data = await request.json();
  const res = await prisma.userWebMe
    .create({
      data: {
        userId: randomUUID(),
        username: data.username,
        password: data.password,
      },
    })
    .then((res: any) => {
      return Response.json(
        { message: 'username created', data: res },
        { status: 200 },
      );
    })
    .catch((err: any) => {
      switch (err.code) {
        case 'P2002':
          return Response.json({ message: 'username exited' }, { status: 401 });
        default:
          return Response.json(
            { message: 'something went wrong' },
            { status: 401 },
          );
      }
    });
  return res;
}
