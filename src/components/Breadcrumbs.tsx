import Link from "next/link";

type Crumb = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item) => (
          <li key={item.name}>
            {item.href ? <Link href={item.href}>{item.name}</Link> : item.name}
          </li>
        ))}
      </ol>
    </nav>
  );
}
