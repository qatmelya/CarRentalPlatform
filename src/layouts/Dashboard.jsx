import React from 'react';
import CarList from '../pages/CarList';
import CarDetail from '../pages/CarDetail';
import Categories from './Categories';
import { Grid } from 'semantic-ui-react';
import { Routes, Route } from 'react-router-dom';
import CartDetail from '../pages/CartDetail';
import BrandList from '../pages/BrandList';
import BrandDetail from '../pages/BrandDetail';
import ModelList from '../pages/ModelList';
import ColorList from '../pages/ColorList';

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" element={<CarList />} />
              <Route exact path="/cars" element={<CarList />} />
              <Route
                exact
                path="/cars/:brandId/:modelId/:colorId"
                element={<CarList />}
              />
              <Route exact path="/cardetail/:id" element={<CarDetail />} />
              <Route exact path="/cart" element={<CartDetail />} />
              <Route exact path="/brands" element={<BrandList />} />
              <Route exact path="/branddetail/:id" element={<BrandDetail />} />
              <Route exact path="/models" element={<ModelList />} />
              <Route exact path="/colors" element={<ColorList />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
