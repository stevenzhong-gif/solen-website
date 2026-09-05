import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type ProductCardProps = { name: string; description: string; image: StaticImageData; href: string; number: string; learnMore: string; learnAbout: string };

export function ProductCard({ name, description, image, href, number, learnMore, learnAbout }: ProductCardProps) {
  return <article className="product-card">
    <Link className="product-card__visual" href={href} aria-label={`${learnAbout} ${name}`}><span className="product-card__number" aria-hidden="true">{number}</span><Image src={image} alt={`SOLEN ${name}`} sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" /></Link>
    <div className="product-card__copy">
      <h3><Link href={href}>{name}</Link></h3><p>{description.split("\n").map((line) => <span key={line}>{line}</span>)}</p>
      <Link href={href} aria-label={`${learnAbout} ${name}`}>{learnMore} <span aria-hidden="true">↗</span></Link>
    </div>
  </article>;
}
