import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ModelService from '../services/modelService';
import { Icon, Menu, Table } from 'semantic-ui-react';
import ModelAdd from './ModelAdd';
import '../styles/Tables.css';

export default function ModelList() {
  const [models, setModels] = useState([]);
  useEffect(() => {
    let modelService = new ModelService();
    modelService
      .getAllModelDetails()
      .then((result) => setModels(result.data.data));
  }, []);
  return (
    <div>
      <Table inverted celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Model Name</Table.HeaderCell>
            <Table.HeaderCell className="headerCell">
              Brand Name <ModelAdd />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {models.map((model) => (
            <Table.Row key={model.id}>
              <Table.Cell>
                <NavLink
                  to={`/cars/0/${model.id}/0`}
                  className="navLinkElement"
                >
                  {model.name}
                </NavLink>
              </Table.Cell>
              <Table.Cell>{model.brandName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
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
