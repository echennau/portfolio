import Image from "next/image";
import Landing from "./components/landing/Landing";
import Bio from "./components/bio/Bio";

export default function Home() {
  return (
    <div className="h-[5000px] flex flex-col py-12 xl:py-24 gap-y-12">
      <Landing />
      <Bio />
    </div>
  );
}
