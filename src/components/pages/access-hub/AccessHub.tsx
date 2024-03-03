'use client';

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '../../ui/button';
import { Typrography } from '@/components/custom/typrography';
import { CardCuz } from '@/components/custom/card-cuz';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

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
          <LoginForm />
          <Button
            fullWidth
            style={{ marginTop: '1rem' }}
            variant={'outline'}
            onClick={() => setIsSwapForm(!isSwapForm)}
          >
            {'Sign Up'}
          </Button>
        </CardCuz>
      </Container>
    </Layout>
  );
}
