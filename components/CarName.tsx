import { CarNameProps } from "@/typings.d";
import { sentenceCase } from "@/utils/functions";

// ----
const CarName = ({
  car: { make, model, fuel_type, year },
}: CarNameProps): React.ReactElement => (
  <div className="car-name">
    <div className="car-name__make-and-model">
      {sentenceCase(make)} {sentenceCase(model)}
    </div>
    <div className="car-name__fuel-and-year">
      {`${sentenceCase(fuel_type)} -- ${year}`}
    </div>
  </div>
);

export default CarName;
