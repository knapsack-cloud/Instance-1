import * as React from 'react';
import Card from './card';
import Button from '../button/button';

export default () => (
  <Card cardBody="body" cardTitle="title">
    <Button type="danger">I&apos;m a button!</Button>
  </Card>
);
