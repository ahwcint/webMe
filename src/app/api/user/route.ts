import { randomUUID } from 'crypto';
import { prisma } from '@/libs/utils';

export async function GET() {
  return Response.json({ auth: true }, { status: 401 });
}

export async function POST(request: Request) {
  const data = await request.json();
  return await prisma.userWebMe
    .create({
      data: {
        userId: randomUUID(),
        username: data.username,
        password: data.password,
      },
    })
    .then((res) => {
      return Response.json(
        {
          message: 'The username has been created',
          data: res,
        },
        { status: 200 },
      );
    })
    .catch((err: any) => {
      switch (err.code) {
        case 'P2002':
          return Response.json(
            {
              message:
                'The requested username is already taken, Please choose a different username',
              data: err,
            },
            { status: 409 },
          );
        default:
          return Response.json(
            { message: 'something went wrong', data: err },
            { status: 401 },
          );
      }
    });
}
