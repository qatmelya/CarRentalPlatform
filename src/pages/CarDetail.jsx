import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  Card,
  Segment,
  Loader,
  Dimmer,
  Image,
} from 'semantic-ui-react';
import loadImage from '../services/imageFromBackend';
import CarImageService from '../services/carImageService';
import CarService from '../services/carService';

export default function CarDetail() {
  let { id } = useParams();
  const [car, setCar] = useState({});
  useEffect(() => {
    let carService = new CarService();
    carService.getById(id).then((result) => setCar(result.data.data));
  }, []);
  const [carImages, setCarImages] = useState([]);
  useEffect(() => {
    let carImageService = new CarImageService();
    carImageService
      .getByCarId(id)
      .then((result) => setCarImages(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            {carImages.length > 0 ? (
              carImages.map((carImage) =>
                loadImage(carImage.imagePath, carImage.id)
              )
            ) : (
              <Segment>
                <Dimmer active inverted>
                  <Loader inverted>Loading</Loader>
                </Dimmer>

                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              </Segment>
            )}

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
