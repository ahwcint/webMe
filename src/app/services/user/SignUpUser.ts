'use server';

import axios from 'axios';
import { TSignUpFormSchema } from '@/libs/auth';

const API_PATH_NAME = process.env.API_PATH_NAME;
export default async function SignUpUser(payload: TSignUpFormSchema) {
  axios
    .post(`${API_PATH_NAME}/user`, payload)
    .then((res) => console.log('res', res))
    .catch((err) => console.log('err', err));
}
