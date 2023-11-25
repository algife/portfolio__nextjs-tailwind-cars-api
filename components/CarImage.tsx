import { CarImageProps } from "@/typings.d";
import { generateCarImageUrl } from "@/utils/functions";
import Image from "next/image";

// Preloading the CarImage using Preload Next.js pattern for demo purposes
export const preload = ({
  car,
  alt,
  priority = true,
  angle = 0,
}: CarImageProps) => {
  void (
    <Image
      priority={priority}
      fill
      src={generateCarImageUrl(car, angle)}
      className="object-contain"
      alt={alt}
    />
  );
};

const CarImage = ({ car, alt, priority = true, angle = 0 }: CarImageProps) => (
  <Image
    priority={priority}
    fill
    src={generateCarImageUrl(car, angle)}
    className="object-contain"
    alt={alt}
  />
);

export default CarImage;
