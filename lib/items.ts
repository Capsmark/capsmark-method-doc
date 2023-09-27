export type Item = {
  name: string;
  id: string;
  range: number | null;
};

export const items: { name: string; items: Item[] }[] = [
  {
    name: 'Test 1',
    items: [
      {
        name: 'Nested Test',
        id: 'nested_test',
        range: null
      },
      {
        name: 'Test 2',
        id: 'test_2',
        range: null
      },
      {
        name: 'Test 3',
        id: 'test_3',
        range: null
      },
    ],
  },
];
