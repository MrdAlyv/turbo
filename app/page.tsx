'use client'
import { useSelector } from "react-redux";
import { IStateCard } from "./store";
import Nav from "@/components/navBar";
import Image from "next/image";
export default function Home() {

  const cards = useSelector((state: IStateCard) => state.announcement)
  console.log(cards)
  return (
    <div>
      <Nav />

      <div className="grid grid-cols-3 max-sm:flex max-sm:flex-wrap gap-y-7 mx-16 mb-16">
        {cards && cards.map(({ id, brand, mark, fuel, mileage, carImage, year }) => (
          <div key={id} className="mt-6 mx-6 shadow-lg rounded-xl  w-64  h-72 p-4  ">
            <Image src={carImage} alt="carImage" width={130} height={60} className=" w-full"></Image>
            <p className=" text-xl font-bold mt-2">{mark} AZN</p>
            <p>{brand}</p>
            <div className="flex flex-row gap-3">
              <p>{year} ,</p>
              <p>{mileage} km</p>
            </div>
            <p>{fuel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}