'use server';

import axios from 'axios';
import { Prisma, UserWebMe } from '@prisma/client';
import { SignUpUserRequest, SignUpUserResponse } from './SignUpUser.type';
import { axiosHeaders } from '@/libs/utils';
import { TSignUpFormSchema } from '@/components/pages/access-hub/AccessHub.type';

const API_PATH_NAME = process.env.API_PATH_NAME;
export default async function SignUpUser(
  payload: Prisma.UserWebMeCreateInput,
): Promise<SignUpUserResponse<UserWebMe>> {
  return axios
    .post(`${API_PATH_NAME}/user`, payload, axiosHeaders)
    .then((res) => res.data)
    .catch((err) => err.response.data);
}
