'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Flex } from '../custom/Flex/Flex';
import { Typrography } from '../custom/Typrography/Typrography';
import { Input } from '../ui/input';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { CardCuz } from '../custom/CardCuz/CardCuz';

const Layout = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
});

export default function LoginPage() {
  return (
    <Layout>
      <CardCuz
        // style={{ width: 'clamp(20rem,100%,25rem)', margin: 'auto' }}
        widthSize={'sm'}
        varient={'neon'}
        marginAuto
      >
        <LoginForm />
      </CardCuz>
    </Layout>
  );
}

function LoginForm() {
  const loginForm = useForm();
  return (
    <FormProvider {...loginForm}>
      <Flex
        direction={'column'}
        style={{ alignItems: 'center', padding: '1rem', gap: '0.5rem' }}
        childFullWidth
      >
        <Typrography textAlign={'center'} fontSize={'1.5rem'}>
          {'Welcome to webMe'}
        </Typrography>
        <FormField
          name={'username'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Typrography>{'USERNAME'}</Typrography>
              </FormLabel>
              <FormControl>
                <Input type={'text'} {...field} autoComplete={'off'} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name={'password'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Typrography>{'PASSWORD'}</Typrography>
              </FormLabel>
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
          onClick={() => loginForm.reset()}
        >
          {'Log in'}
        </Button>
      </Flex>
    </FormProvider>
  );
}

// <Flex
//   direction={'column'}
//   style={{ alignItems: 'center', padding: '1rem', gap: '0.5rem' }}
// >
//   <Typrography>{'USERNAME'}</Typrography>
//   <Input type={'text'} />
//   <Typrography>{'PASSWORD'}</Typrography>
//   <Input type={'password'} />
//   <Button fullWidth style={{ marginTop: '1rem' }}>
//     {'Log in'}
//   </Button>
// </Flex>
