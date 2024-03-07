'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import z, { ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Prisma } from '@prisma/client';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { TSignUpFormSchema } from './AccessHub.type';
import SignUpUser from '@/app/services/user/SignUpUser';
import { useToast } from '@/components/ui/use-toast';

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

const SignUpForm = () => {
  const { toast } = useToast();

  const signUpForm = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });
  const handleSubmit = async (payload: unknown) => {
    const res = await SignUpUser(payload as Prisma.UserWebMeCreateInput);
    const title =
      res.data?.code === 'P2002'
        ? 'The username is already taken'
        : 'Create username success';
    const variant = res.data?.code === 'P2002' ? 'destructive' : 'default';
    toast({
      title,
      description: res.message,
      variant,
    });
  };
  const watchBotton = signUpForm.watch([
    'username',
    'password',
    'confirmPassword',
  ]);
  return (
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
  );
};

export default SignUpForm;
