'use client'
import Image from "next/image";
import { MongoClient } from 'mongodb';
import { useState } from "react";
import { PriceServiceConnection } from "@pythnetwork/price-service-client";

export default function Home() {
  const [sui,setSui] = useState(price());
  async function handle(){
    const val = price();
    setSui(val);
    const text = document.getElementById('but');
    if (text){
      text.innerText=`$${await sui} USD/SUI`;
    }
    
  }
  return (
    <div className="w-full flex flex-col">
      <div className="mx-auto my-2">
        <Image
          src="suipricelogo.png"
          width={60}
          height={20}
          alt="sui price logo"
        />
      </div>
      <div className="bg-[#B0CBD4] flex flex-col rounded-lg shadow-lg shadow-[#6fbcf0] w-1/2 md:w-1/4 h-1/4 place-content-center gap-4 my-auto mx-auto">
        <div className="mx-auto rounded-lg w-fit p-2"><button onClick={handle}><Image
          src="/sui-sui-logo.svg"
          alt="SUI Logo"
          width={50}
          height={50}
          className="inline"
        /></button></div>
        <div id="but" className="mx-auto h-fit p-2 text-slate-900 font-bold text-white rounded-md bg-[#6fbcf0]">
          Click Sui
        </div>
      </div>
    </div>
  );
}

const connection = new PriceServiceConnection("https://hermes.pyth.network");
const suiId = ["0x23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744"];

async function price(){
  const sprice = await connection.getLatestPriceFeeds(suiId);
  const lit = sprice? sprice[0].getPriceNoOlderThan(60)?.price: 0;
  return (Number(lit)*(10**-8)).toFixed(6);
}
