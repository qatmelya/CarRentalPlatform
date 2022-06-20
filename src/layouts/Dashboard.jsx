import React from 'react';
import CarList from '../pages/CarList';
import Categories from './Categories';
import { Grid } from 'semantic-ui-react';

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <CarList></CarList>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
