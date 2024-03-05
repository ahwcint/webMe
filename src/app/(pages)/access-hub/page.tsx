import React from 'react';
import AccessHub from '@/components/pages/access-hub/AccessHub';
import { getSession } from '@/app/api/auth';

export default async function Login() {
  const session = await getSession();

  return <AccessHub {...{ session }} />;
}
