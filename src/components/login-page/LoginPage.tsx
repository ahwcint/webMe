'use client';

import React from 'react';
import styled from '@emotion/styled';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Flex } from '../custom/Flex';
import { Typrography } from '../custom/Typrography';
import { Input } from '../ui/input';
import { Form } from '../ui/form';

const Layout = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
});

export default function LoginPage() {
  return (
    <Layout>
      <Card style={{ width: 'clamp(20rem,100%,25rem)', margin: 'auto' }}>
        <Flex
          direction={'column'}
          style={{ alignItems: 'center', padding: '1rem', gap: '0.5rem' }}
        >
          <Typrography>{'USERNAME'}</Typrography>
          <Input type={'text'} />
          <Typrography>{'PASSWORD'}</Typrography>
          <Input type={'password'} />
          <Button fullWidth style={{ marginTop: '1rem' }}>
            {'Log in'}
          </Button>
        </Flex>
      </Card>
    </Layout>
  );
}
