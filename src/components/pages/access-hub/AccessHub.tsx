'use client';

import React from 'react';
import styled from '@emotion/styled';
import { Button } from '../../ui/button';
import LoginForm from './LoginForm';
import { Typrography } from '@/components/custom/typrography';
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

export default function AccessHub() {
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
          <Button fullWidth style={{ marginTop: '1rem' }} variant={'outline'}>
            {'Sign Up'}
          </Button>
        </CardCuz>
      </Container>
    </Layout>
  );
}