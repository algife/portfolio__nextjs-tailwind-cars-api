import { CarImageProps } from "@/typings.d";
import { generateCarImageUrl } from "@/utils/functions";
import Image from "next/image";

// export const preload = ({ car, angle = 0 }: CarImageProps) => {
//   // void evaluates the given expression and returns undefined
//   // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
//   void generateCarImageUrl(car, angle);
// };

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
