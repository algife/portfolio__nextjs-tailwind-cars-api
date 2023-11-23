import { CarProps } from "@/typings.d";
import { generateCarImageUrl } from "@/utils/functions";
import Image from "next/image";

const CarImage = ({
  car,
  alt,
  priority = true,
  angle = 0,
}: {
  car: Pick<CarProps, "make" | "year" | "model">;
  alt: string;
  angle?: number;
  priority?: boolean;
}) => (
  <Image
    priority={priority}
    fill
    src={generateCarImageUrl(car, angle)}
    className="object-contain"
    alt={alt}
  />
);

export default CarImage;
