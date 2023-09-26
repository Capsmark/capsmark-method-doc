export type Item = {
  name: string;
};

export const items: { name: string; items: Item[] }[] = [
  {
    name: 'Test 1',
    items: [
      {
        name: 'Nested Test',
      },
      {
        name: 'Test 2',
      },
      {
        name: 'Test 3',
      },
    ],
  },
];
