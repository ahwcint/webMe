'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import z, { ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../ui/button';
import { Typrography } from '../../custom/custom-typrography/Typrography';
import { Input } from '../../ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';

type TSignUpFormSchema = {
  username: string;
  password: string;
  confirmPassword: string;
};

const SignUpFormSchema: ZodType<TSignUpFormSchema> = z
  .object({
    username: z
      .string()
      .min(1, { message: 'username are required!' })
      .min(3)
      .max(24),
    password: z
      .string()
      .min(1, { message: 'password are required!' })
      .min(3)
      .max(9),
    confirmPassword: z
      .string()
      .min(1, { message: 'confirm password are required!' })
      .min(3)
      .max(9),
  })
  .refine((e) => e.password === e.confirmPassword, {
    message: 'confirm password not match!',
    path: ['confirmPassword'],
  });

const SignUpForm = ({ isShow = true }: { isShow?: boolean }) => {
  const signUpForm = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });
  const handleSubmit = (e: TSignUpFormSchema) => {
    console.log('e', e);
  };
  const watchBotton = signUpForm.watch([
    'username',
    'password',
    'confirmPassword',
  ]);
  return (
    isShow && (
      <Form {...signUpForm}>
        <form onSubmit={signUpForm.handleSubmit(handleSubmit)}>
          <FormField
            control={signUpForm.control}
            name={'username'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{'USERNAME'}</FormLabel>
                <FormControl>
                  <Input type={'text'} {...field} autoComplete={'off'} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signUpForm.control}
            name={'password'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{'PASSWORD'}</FormLabel>
                <FormControl>
                  <Input type={'password'} {...field} autoComplete={'off'} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signUpForm.control}
            name={'confirmPassword'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{'CONFIRM PASSWORD'}</FormLabel>
                <FormControl>
                  <Input type={'password'} {...field} autoComplete={'off'} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            fullWidth
            style={{ marginTop: '1rem' }}
            onClick={() => signUpForm.handleSubmit(handleSubmit)}
            disabled={watchBotton.includes('')}
            variant={watchBotton.includes('') ? 'outline' : 'default'}
          >
            {'Sign Up!'}
          </Button>
        </form>
      </Form>
    )
  );
};

export default SignUpForm;
