export type Item = {
  name: string;
  id: string;
};

export const items: { name: string; items: Item[] }[] = [
  {
    name: 'Test 1',
    items: [
      {
        name: 'Nested Test',
        id: 'nested_test',
      },
      {
        name: 'Test 2',
        id: 'test_2'
      },
      {
        name: 'Test 3',
        id: 'test_3'
      },
    ],
  },
];
