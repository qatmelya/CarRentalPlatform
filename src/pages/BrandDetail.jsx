import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import BrandService from '../services/brandService';
import ModelService from '../services/modelService';
import { Icon, Menu, Table } from 'semantic-ui-react';

export default function BrandDetail() {
  let { id: brandId } = useParams();
  const [models, setModels] = useState([]);
  useEffect(() => {
    let modelService = new ModelService();
    modelService
      .getAllByBrandId(brandId)
      .then((result) => setModels(result.data.data));
  }, []);
  const [brand, setBrand] = useState({});
  useEffect(() => {
    let brandService = new BrandService();
    brandService.getById(brandId).then((result) => setBrand(result.data.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{brand.name}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {models.map((model) => (
            <Table.Row key={model.id}>
              <Table.Cell>
                <NavLink to={`/modeldetail/${model.id}`}>{model.name}</NavLink>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
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
