import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';
import dynamicImage from '../hooks/dynamicImage';
import CarImageService from '../services/carImageService';
import CarService from '../services/carService';

export default function CarDetail() {
  let { id } = useParams();
  const [car, setCar] = useState({});
  useEffect(() => {
    let carService = new CarService();
    carService.getById(id).then((result) => setCar(result.data.data));
  }, []);
  const [carImages, setCarImages] = useState([
    { imagePath: 'assets/default.png' },
  ]);
  useEffect(() => {
    let carImageService = new CarImageService();
    carImageService
      .getByCarId(id)
      .then((result) => setCarImages(result.data.data));
  }, [
    {
      imagePath: ' ',
    },
  ]);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            {dynamicImage(carImages[0].imagePath)}

            <Card.Header>{car.name}</Card.Header>
            <Card.Meta>Rental Car</Card.Meta>
            <Card.Description>{car.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Rent
              </Button>
              <Button basic color="red">
                Add to Favorites
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
