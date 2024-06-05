'use client'
import Chart from './chart';
import React, { useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import { PriceServiceConnection } from "@pythnetwork/price-service-client";

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
                suiprice.innerText=`SUI Price : $ ${await getPrice()}`;
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
      <div id="data" className="bg-[#B0CBD4] flex flex-col rounded-lg shadow-md shadow-white w-5/6 h-1/3 gap-4 md:w-1/2 md:h-2/3 md:gap-0 md:p-2">
          <div className='flex flex-row'>
              <Day />
              <Week />
          </div>
          <Chart />
      </div>
  );
}

function Day(){
    useEffect(()=>{
        setInterval(async ()=>{
            const day = document.getElementById('day');
            if (day){
                day.innerText=`Sui 24HR : ${getRate(await getPrice(),await getOldPrice(dsecs))}%`;
            };
        },5000);
    },[]);
    return(
        <div className="h-10 md:w-1/2 md:h-10">
            <p className="font-semibold text-center" id="day">Sui 24HR:Fetching Data</p>
        </div>
    );
}

function Week(){
    useEffect(()=>{
        setInterval(async()=>{
            const week = document.getElementById('week');
            if (week){
                week.innerText=`Sui 7D : ${getRate(await getPrice(),await getOldPrice(wsecs))}%`;
            }
        },5000);
    },[]);
    return(
        <div className="h-10 md:w-1/2 md:h-10">
            <p className="font-semibold text-center" id="week">Sui 7D: Fetching Data</p>
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
                <Link href="/">Bridge</Link>
            </button>
            <button className="border rounded-full bg-[#6fbcf0] p-2 w-1/2 mx-auto text-lg font-bold shadow-md shadow-white md:w-full">
                <Link href="/">Scallop</Link>
            </button>
            <button className="border rounded-full bg-[#6fbcf0] p-2 w-1/2 mx-auto text-lg font-bold shadow-md shadow-white md:w-full">
                <Link href="/">Navi</Link>
            </button>
            <button className="border rounded-full bg-[#6fbcf0] p-2 w-1/2 mx-auto text-lg font-bold shadow-md shadow-white md:w-full">
                <Link href="/">Swap</Link>
            </button>
            <button className="border rounded-full bg-[#6fbcf0] p-2 w-1/2 mx-auto text-lg font-bold shadow-md shadow-white md:w-full">
                <Link href="/">SuiPad</Link>
            </button>
        </div>
    );
}

function Footer(){
    return(
        <div className="flex flex-row h-10 place-content-evenly">
            <Link href="/">Terms</Link>
            <Link href="/">Privacy</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
        </div>
    );
}

const connection = new PriceServiceConnection("https://hermes.pyth.network");
const suiId = ["0x23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744"];
const dsecs = 60*60*24;
const wsecs = dsecs*7;

async function getPrice(){
    const priceFeed = await connection.getLatestPriceFeeds(suiId);
    const price = Number(priceFeed? priceFeed[0].getPriceNoOlderThan(60)?.price:0)*(10**-8);
    return Number(price.toFixed(5))
}

async function getOldPrice(time:number){
    const priceFeed = await connection.getPriceFeed(suiId[0], Math.floor(Date.now()/1000 -time));
    const price = Number(priceFeed.getPriceUnchecked().price)*(10**-8);
    return Number(price.toFixed(5))
}

function getRate(num1:number,num2:number){
    return ((num1/num2 -1)*100).toFixed(4)
}



