import { items } from '#/lib/items';
import { Section } from '#/ui/sections/section';

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="space-y-10 text-white">
        {items.map(({ name, items, id }, index) => (
          <Section name={name} items={items} id={id} index={index} />
        ))}
      </div>
    </div>
  );
}
