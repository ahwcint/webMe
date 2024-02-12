'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import z, { ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styled from '@emotion/styled';
import { Button } from '../ui/button';
import { Flex } from '../custom/flex/Flex';
import { Typrography } from '../custom/typrography/Typrography';
import { Input } from '../ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { CardCuz } from '../custom/card-cuz/CardCuz';

const loginFormSchem = z.object({
  username: z
    .string()
    .min(1, { message: 'username are required!' })
    .min(3)
    .max(24),
  password: z.string().min(3).max(9),
});

const Layout = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
});

export default function LoginPage() {
  return (
    <Layout>
      <CardCuz
        widthSize={'sm'}
        varient={'neon'}
        marginAuto
        style={{ padding: '1rem' }}
      >
        <LoginForm />
      </CardCuz>
    </Layout>
  );
}

const LoginForm = () => {
  const loginForm = useForm<z.infer<typeof loginFormSchem>>({
    resolver: zodResolver(loginFormSchem),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const handleSubmit = (e: any) => {
    loginFormSchem.parse(e);
    loginFormSchem.parse({ username: '123', password: '123' });
    console.log('e', e);
  };
  const watchButton = loginForm.watch(['username', 'password']);
  return (
    <Form {...loginForm}>
      <form onSubmit={loginForm.handleSubmit(handleSubmit)}>
        <Typrography
          textAlign={'center'}
          fontSize={'1.5rem'}
          lineHeight={'1rem'}
          fontWeight={'bold'}
          margin={'2rem 1rem'}
        >
          {'Welcome to webMe'}
        </Typrography>
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
          disabled={watchButton.includes('')}
          variant={watchButton.includes('') ? 'outline' : 'default'}
        >
          {'Log in'}
        </Button>
      </form>
    </Form>
  );
};
