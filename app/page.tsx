import { items } from '#/lib/items';
import { Section } from '#/ui/sections/section';

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="space-y-10 text-white">
        {items.map(({ id, name, items }, index) => (
          <Section key={id} id={id} name={name} items={items} index={index} />
        ))}
      </div>
    </div>
  );
}
