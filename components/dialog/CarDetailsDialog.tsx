"use client";
import CarImage from "@/components/CarImage";
import { store } from "@/redux/store";
import { CarDetailsDialogsProps } from "@/typings.d";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

export const dynamicParams = true;

export default function CarDetailsDialog({
  car,
  isModalOpen,
  setIsModalOpen,
}: CarDetailsDialogsProps) {
  // const dispatch = useDispatch();
  const searchStateSlice = store.getState().search;

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="dialog" onClose={handleModalClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="dialog__backdrop" />
        </Transition.Child>

        <div className="dialog__modalbox-container">
          <div className="dialog__modalbox-content">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-out duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="dialog__panel">
                <button
                  type="button"
                  className="dialog__panel-close"
                  onClick={handleModalClose}
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>

                <div className="car-details__main">
                  {/* main image */}
                  <section className="car-details__main-image">
                    <CarImage car={car} angle={0} alt="car model" />
                  </section>

                  {/* three-cols section */}
                  <section className="car-details__columns">
                    <div className="car-details__columns-item">
                      <CarImage car={car} angle={29} alt="car model" />
                    </div>
                    <div className="car-details__columns-item">
                      <CarImage car={car} angle={33} alt="car model" />
                    </div>
                    <div className="car-details__columns-item">
                      <CarImage car={car} angle={13} alt="car model" />
                    </div>
                  </section>
                </div>

                <div className="car-details__showcase">
                  <h2 className="car-details__name">
                    {car.make} {car.model}
                  </h2>

                  <div className="car-details__tech">
                    {Object.entries(car).map(([key, value]) => (
                      <div className="car-details__tech-item" key={key}>
                        <h4 className="text-grey capitalize">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="text-black-100 font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

// export const getServerSideProps = (async (
//   context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
// ) => {
//   const car = store
//     .getState()
//     .search.results.find((c) => getCarId(c) === context.params!["id"]);
//   return { props: { car } };
// }) satisfies GetServerSideProps<{
//   car?: CarProps;
// }>;
