import Image, { type StaticImageData } from "next/image";

type ProductCardProps = { name: string; description: string; image: StaticImageData; number: string };

export function ProductCard({ name, description, image, number }: ProductCardProps) {
  return <article className="product-card">
    <div className="product-card__visual"><span className="product-card__number" aria-hidden="true">{number}</span><Image src={image} alt={`SOLEN ${name}`} sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div>
    <div className="product-card__copy">
      <h3>{name}</h3><p>{description.split("\n").map((line) => <span key={line}>{line}</span>)}</p>
      <a href="#support" aria-label={`Learn more about ${name}`}>Learn more <span aria-hidden="true">↗</span></a>
    </div>
  </article>;
}
