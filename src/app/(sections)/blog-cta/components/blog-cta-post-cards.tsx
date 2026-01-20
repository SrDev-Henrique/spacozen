import Image from "next/image";

export function BlogCtaPostCards({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex bmd:w-lg w-md shrink-0 items-start gap-4 overflow-hidden rounded-xl bg-foreground/76">
      <div className="relative aspect-square min-w-48.5 overflow-hidden rounded-xl lg:min-w-47.5">
        <Image
          src={image}
          alt="Blog"
          fill
          className="object-cover object-center brightness-90"
          placeholder="blur"
          blurDataURL={image}
        />
      </div>
      <div className="space-y-2 py-4 pe-4">
        <p className="bmd:text-lg text-primary-foreground">{title}</p>
        <p className="bmd:text-base text-muted-bright-foreground text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
