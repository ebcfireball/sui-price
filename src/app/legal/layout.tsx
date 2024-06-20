import Link from "next/link";
import Image from "next/image";
import { Inter, Roboto } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400","700"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-white w-screen h-[2600px] md:h-[1300px] flex flex-col bg-gradient-to-r from-[#CDDBE1] to-[#75AABB]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

function Navbar(){
    return(
        <div className="flex flex-col mx-auto h-20 mb-24 md:mb-0 md:mt-2">
            <Link href="https://sui-price.com">
                <Image
                    src="/suipricelogo.png"
                    width={50}
                    height={50}
                    alt="company logo"
                    className="mx-auto"
                />
            </Link>
        </div>
    );
}