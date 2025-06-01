import { Felipa } from "next/font/google";

const felipafont = Felipa({
  weight: "400",
  subsets: ["latin"],
});

export default function Mainpage() {
  return (
    <div className={` flex flex-col   text-center`}>
      <div className={`text-9xl `}>ATUM UI</div>
      <div className={`text-4xl ${felipafont.className} `}>
        Simply Crafted By The Gods
      </div>
    </div>
  );
}
