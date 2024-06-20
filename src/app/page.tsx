'use client'
import Chart from './chart';
import React, { useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import { PriceServiceConnection } from "@pythnetwork/price-service-client";
import PercentChange from './components/percentchange';
import { getPrice, suiId, hsecs, dsecs, wsecs } from './components/percentchange';

export default function Beta(){
    return(
        <main className="w-full h-full flex flex-col">
            <Navbar />
            <Content />
            <Footer />
        </main>
    );
}

function Navbar(){
    useEffect(()=>{
        setInterval(async()=>{
            const suiprice = document.getElementById('suiprice');
            if (suiprice){
                suiprice.innerText=`SUI Price : $ ${await getPrice(suiId)}`;
            };
        },5000);
    },[]);
    return(
        <div className="flex flex-col mx-auto h-20 mb-24 md:mb-0 md:mt-2">
            <Image
                src="/suipricelogo.png"
                width={50}
                height={120}
                alt="logo"
                className="mx-auto"
            />
            <p className="text-center shadow-md shadow-sky-300 p-4 text-[24px] font-bold bg-[#B0CBD4] w-fit mx-auto rounded-lg mt-2" id="suiprice">sui price</p>
        </div>
    );
}

function Content(){
    return(
        <div className="flex flex-col w-full h-full md:flex-row md:place-items-center">
            <MainCol />
            <Side />
        </div>
    );
}

function MainCol(){
    return (
        <div className="flex flex-col w-full h-3/4 gap-6 place-items-center">
            <Data />
            <What />
            <RandBot />
        </div>
    );
}
function Data(){
  return(
      <div id="data" className="bg-[#B0CBD4] flex flex-col rounded-lg shadow-md shadow-white w-5/6 h-1/3 gap-4 md:w-3/4 md:h-2/3 md:gap-0 md:p-2 overflow-hidden">
          <div className='flex flex-row'>
                <PercentChange timeframe='hour' secs={hsecs} />
                <PercentChange timeframe='day' secs={dsecs} />
                <PercentChange timeframe='week' secs={wsecs} />
          </div>
          <Chart />
      </div>
  );
}

function What(){
    return (
        <div className="h-1/4 w-5/6 rounded-lg shadow-md shadow-white bg-[#B0CBD4]">
            <p className="p-2 font-bold text-lg">WHAT IS SUI?</p>
            <p className="p-2 ">Built by Mysten Labs, Sui is a unique blockchain that utilizes parallel transaction execution and a delegated proof-of-stake (DPoS) model. This innovative approach powered by the Move programming language allows for seamless smart contract development and deployment. Move enables a new level of direct digital ownership, allowing users to manage digital assets more efficiently and safely.</p>
        </div>
    );
}

function RandBot(){
    return (
        <div className="w-5/6 h-1/3 flex flex-col gap-4 md:h-1/3 md:flex-row">
            <Article />
            <About />
        </div>
    );
}

function Article(){
    return (
        <div className="h-1/2 w-full md:w-1/2 md:h-full rounded-lg shadow-md shadow-white bg-[#B0CBD4] md:mr-2">
            <p className="font-bold text-lg h-1/6 p-2">Article</p>
            <p className="h-5/6 p-2 text-lg">A liquidity pool is a smart contract containing a reserve of two or more cryptocurrency tokens on a decentralized exchange (DEX). These pools enable trading and borrowing, bringing easy-to-access financial services to everyone. </p>
        </div>
    );
}

function About(){
    return (
        <div className="h-1/2 w-full md:w-1/2 md:h-full rounded-lg bg-[#B0CBD4] shadow-md shadow-white md:ml-2">
            <p className=" font-bold text-lg h-1/6 p-2">ABOUT US</p>
            <p className=" h-5/6 p-2 text-lg">SUI-PRICE.COM aims to provide users with the latest and most accurate SUI/USD price in real time. Our interface allows users to quickly and conveniently pull the latest data to gain the most up to date prices on our favorite asset Sui.</p>
        </div>
    );
}

function Side(){
    return (
        <div className="p-2 flex flex-col place-content-evenly gap-6 h-1/4 w-5/6 mx-auto mb-2 md:mb-0 md:h-1/2 md:w-36 md:mr-6 md:place-content-start">
            <button className="border rounded-full bg-[#6fbcf0] p-2 w-1/2 mx-auto text-lg font-bold shadow-md shadow-white md:w-full">
                <Link href="https://app.rocketx.exchange/?ref=LuokCwb4">Bridge</Link>
            </button>
            <button className="border rounded-full bg-[#6fbcf0] p-2 w-1/2 mx-auto text-lg font-bold shadow-md shadow-white md:w-full">
                <Link href="https://app.scallop.io/referral?ref=0x09e76ae0e03a7c1dd56c1c792532e7b7e34e15766f7e492aa81e74cbf4a52225">Scallop</Link>
            </button>
            <button className="border rounded-full bg-[#6fbcf0] p-2 w-1/2 mx-auto text-lg font-bold shadow-md shadow-white md:w-full">
                <Link href="https://app.naviprotocol.io/?code=452936285846245376">Navi</Link>
            </button>
            <button className="border rounded-full bg-[#6fbcf0] p-2 w-1/2 mx-auto text-lg font-bold shadow-md shadow-white md:w-full">
                <Link href="https://app.rocketx.exchange/?ref=LuokCwb4">Swap</Link>
            </button>
            <button className="border rounded-full bg-[#6fbcf0] p-2 w-1/2 mx-auto text-lg font-bold shadow-md shadow-white md:w-full">
                <Link href="https://airdrop.suipad.xyz/suipad_season_1?code=lwtmfr8f1c05">SuiPad</Link>
            </button>
        </div>
    );
}

function Footer(){
    return(
        <div className="flex flex-row h-10 place-content-evenly">
            <Link href="/legal/terms">Terms</Link>
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="/legal/disclaimer">Disclaimer</Link>
            <Link href="/legal/contact">Contact</Link>
        </div>
    );
}
