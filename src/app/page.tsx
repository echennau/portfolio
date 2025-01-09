import Image from "next/image";
import Landing from "./components/Landing/Landing";

export default function Home() {
  return (
    <div className="h-[5000px] flex flex-col py-12 xl:py-24 gap-y-12">
      <Landing />
    </div>
  );
}
