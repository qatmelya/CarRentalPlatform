import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Icon, Menu, Table } from 'semantic-ui-react';
import CarService from '../services/carService';

export default function CarList() {
  let { brandId, modelId, colorId } = useParams();
  const [cars, setCars] = useState([]);
  let filterByBrand = (cars, brandId) =>
    cars.filter((car) => car.brandId === parseInt(brandId));
  let filterByModel = (cars, modelId) =>
    cars.filter((car) => car.modelId === parseInt(modelId));
  let filterByColor = (cars, colorId) =>
    cars.filter((car) => car.colorId === parseInt(colorId));
  useEffect(() => {
    let carService = new CarService();
    carService.getDetails().then((result) => {
      let filteredResult = result.data.data;
      if (brandId > 0) {
        filteredResult = filterByBrand(filteredResult, brandId);
      }
      if (modelId > 0) {
        filteredResult = filterByModel(filteredResult, modelId);
      }
      if (colorId > 0) {
        filteredResult = filterByColor(filteredResult, colorId);
      }
      setCars(filteredResult);
    });
  }, []);

  return (
    <div>
      <Table inverted celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Car Name</Table.HeaderCell>
            <Table.HeaderCell>Brand</Table.HeaderCell>
            <Table.HeaderCell>Model</Table.HeaderCell>
            <Table.HeaderCell>Color</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cars.map((car) => (
            <Table.Row key={car.id}>
              <Table.Cell>
                <NavLink to={`/cardetail/${car.id}`}>{car.name}</NavLink>
              </Table.Cell>
              <Table.Cell>{car.brandName}</Table.Cell>
              <Table.Cell>{car.modelName}</Table.Cell>
              <Table.Cell>{car.colorName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Menu inverted floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
