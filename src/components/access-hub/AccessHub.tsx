'use client';

import React, { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { CardCuz } from '../custom/card-cuz/CardCuz';
import { Button } from '../ui/button';
import { Typrography } from '../custom/typrography';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Layout = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
});

export default function AccessHub() {
  return (
    <Layout>
      <LoginForm />
      {/* <CardCuz
          widthSize={'sm'}
          varient={'neon'}
          marginAuto
          style={{ padding: '1rem', position: 'relative' }}
        >
          <Typrography
            textAlign={'center'}
            fontSize={'1.5rem'}
            lineHeight={'1rem'}
            fontWeight={'bold'}
            margin={'2rem 1rem'}
          >
            {'SignUp Form'}
          </Typrography>
          <SignUpForm />
          <Button
            fullWidth
            style={{ marginTop: '1rem' }}
            variant={'outline'}
            onClick={() => setIsSwapForm(false)}
          >
            {'Log in'}
          </Button>
        </CardCuz> */}
    </Layout>
  );
}
