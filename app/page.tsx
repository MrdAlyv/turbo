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

      <div className="grid grid-cols-3">
        {cards && cards.map(({ brand, mark, fuel, mileage, carImage, year }) => (
          <div className="mt-6 mx-6 shadow-lg rounded-xl  w-64  h-72 p-4  ">
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