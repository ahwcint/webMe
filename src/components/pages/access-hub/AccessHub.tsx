'use client';

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '../../ui/button';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { Typrography } from '@/components/custom/custom-typrography';
import { CardCuz } from '@/components/custom/card-cuz';

const Layout = styled.div({
  height: '100%',
  width: '100%',
  display: 'flex',
});

const Container = styled.div({
  margin: 'auto',
  padding: '1rem',
  width: '25rem',
});

export default function AccessHub({ session }: any) {
  const [isSwapForm, setIsSwapForm] = useState(false);
  return (
    <Layout>
      <Container>
        <CardCuz varient={'neon'}>
          <Typrography
            fontSize={'2rem'}
            fontWeight={'bold'}
            textAlign={'center'}
          >
            {'webMe'}
          </Typrography>
          {!isSwapForm ? <LoginForm /> : <SignUpForm />}
          <Button
            fullWidth
            style={{ marginTop: '1rem' }}
            variant={'outline'}
            onClick={() => setIsSwapForm(!isSwapForm)}
          >
            {isSwapForm ? 'Sign In' : 'Sign Up'}
          </Button>
        </CardCuz>
      </Container>
    </Layout>
  );
}
