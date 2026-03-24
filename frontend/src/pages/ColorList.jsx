import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ColorService from '../services/colorService';
import { Icon, Menu, Table, Placeholder } from 'semantic-ui-react';
import ColorAdd from './ColorAdd';
import '../styles/Tables.css';

export default function ColorList() {
  const [colors, setColors] = useState([]);
  useEffect(() => {
    let colorService = new ColorService();
    colorService.getAll().then((result) => setColors(result.data.data));
  }, []);
  return (
    <div>
      <Table inverted celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="headerCell">
              Color Name <ColorAdd></ColorAdd>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {colors.length > 0 ? (
            colors.map((color) => (
              <Table.Row key={color.id}>
                <Table.Cell>
                  <NavLink
                    to={`/colorDetail/${color.id}`}
                    className="navLinkElement"
                  >
                    {color.name}
                  </NavLink>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row key={0}>
              <Table.Cell>
                <Placeholder fluid inverted>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder>
              </Table.Cell>
            </Table.Row>
          )}
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
