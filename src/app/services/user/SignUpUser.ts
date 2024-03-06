'use server';

import axios from 'axios';
import { TSignUpFormSchema } from '@/libs/auth';
import { axiosHeaders } from '@/libs/utils';

const API_PATH_NAME = process.env.API_PATH_NAME;
export default async function SignUpUser(payload: TSignUpFormSchema) {
  return await axios.post(`${API_PATH_NAME}/user`, payload, axiosHeaders);
}
