import { useEffect } from "react"
import { PriceServiceConnection } from "@pythnetwork/price-service-client"

export default function PercentChange({timeframe, secs}:{timeframe:string, secs:number}){
    useEffect(()=>{
        setInterval(async()=>{
            const rate = getRate(await getPrice(suiId), await getOldPrice(secs))
            const time = document.getElementById(timeframe)
            if (time){
                time.innerText= `SUI ${timeframe} : ${rate}%`;
                if(isPositive(Number(rate))){
                    time.classList.add('text-green-300');
                    time.classList.remove('text-red-500');
                }else{
                    time.classList.add('text-red-500');
                    time.classList.remove('text-green-300');
                }
            }
        },5000)
    },[])
    return(
        <div className="h-10 md:w-1/3">
            <p className="font-semibold text-center" id={timeframe}>Sui {timeframe}:Fetching Data</p>
        </div>
    );
}

const connection = new PriceServiceConnection("https://hermes.pyth.network");
export const suiId = ["0x23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744"];
export const hsecs = 60*60;
export const dsecs = 60*60*24;
export const wsecs = dsecs*7;


export async function getPrice(Id:string[]){
    const priceFeed = await connection.getLatestPriceFeeds(Id);
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

function isPositive(num:number){
    return num>0;
}