'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Flex } from '../custom/Flex';
import { Typrography } from '../custom/Typrography';
import { Input } from '../ui/input';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { CoolCard } from '../custom/CoolCard';

const Layout = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
});

export default function LoginPage() {
  return (
    <Layout>
      <CoolCard style={{ width: 'clamp(20rem,100%,25rem)', margin: 'auto' }}>
        <LoginForm />
      </CoolCard>
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
        <FormField
          name={'username'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Typrography>{'USERNAME'}</Typrography>
              </FormLabel>
              <FormControl>
                <Input type={'text'} {...field} />
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
                <Input type={'password'} {...field} width={'100%'} />
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
