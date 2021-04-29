import * as React from 'react';

import { Tabs } from '@workday/canvas-kit-labs-react/Tabs';

import { useAllCoffee } from '../../providers/AllCoffee';
import { Flex } from '../../components/common/layout';
import { Card } from '../../components/Card';
import { Coffee } from '../../types';
import { splitCoffee } from '../../data/utils';


type CoffeeProps = {
  coffee: Coffee[];
};

const CoffeeList: React.FC<CoffeeProps> = ({ coffee }) => {
  return (
    <Flex as="main" flexDirection="column" flex={1} padding={0}>
      <Flex flexWrap="wrap" alignItems="flex-start">
        {coffee.map((brew) => (
          <Card key={brew.id}>
            <Card.Image type={brew.img} alt={`${brew.name} coffee bag`} />

            <Card.Content>
              <Card.Heading>{brew.name}</Card.Heading>
              <Card.Body>{brew.flavorProfile}</Card.Body>

              <Card.Detail>
                ${brew.price} | {brew.bagWeight} oz.
              </Card.Detail>
            </Card.Content>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export const Home: React.FC = () => {
  const { coffee } = useAllCoffee();
  const [newCoffee, popularCoffee, staffCoffee] = splitCoffee(coffee);

  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item>All</Tabs.Item>
        <Tabs.Item>Popular</Tabs.Item>
        <Tabs.Item>New & Interesting</Tabs.Item>
        <Tabs.Item>Staff Favorites</Tabs.Item>
      </Tabs.List>

      <Tabs.Panel>
        <CoffeeList coffee={coffee} />
      </Tabs.Panel>
      <Tabs.Panel>
        <CoffeeList coffee={popularCoffee} />
      </Tabs.Panel>
      <Tabs.Panel>
        <CoffeeList coffee={newCoffee} />
      </Tabs.Panel>
      <Tabs.Panel>
        <CoffeeList coffee={staffCoffee} />
      </Tabs.Panel>
    </Tabs>
  );
};
