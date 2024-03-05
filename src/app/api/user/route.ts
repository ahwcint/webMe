import type { NextApiResponse, NextApiRequest } from 'next';
import { getSession } from '../auth';

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  return Response.json({ auth: true });
}
