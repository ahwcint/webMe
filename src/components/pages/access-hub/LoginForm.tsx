'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import z, { ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../ui/button';
import { Typrography } from '../../custom/typrography/Typrography';
import { Input } from '../../ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { TLoginFormSchema, signInAuth } from '@/app/api/auth/auth';

const LoginFormSchema: ZodType<TLoginFormSchema> = z.object({
  username: z
    .string()
    .min(1, { message: 'username field is required!' })
    .min(3)
    .max(24),
  password: z
    .string()
    .min(1, { message: 'password field is required!' })
    .min(3)
    .max(9),
});

const LoginForm = () => {
  const loginForm = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleSubmit = (e: TLoginFormSchema) => {
    signInAuth(e);
  };

  const watchBotton = loginForm.watch(['username', 'password']);
  return (
    <Form {...loginForm}>
      <form
        onSubmit={loginForm.handleSubmit(handleSubmit)}
        style={{ width: '100%' }}
      >
        <FormField
          control={loginForm.control}
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
          control={loginForm.control}
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
        <Button
          fullWidth
          style={{ marginTop: '1rem' }}
          onClick={() => loginForm.handleSubmit(handleSubmit)}
          disabled={watchBotton.includes('')}
          variant={watchBotton.includes('') ? 'outline' : 'default'}
        >
          {'Log in'}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
