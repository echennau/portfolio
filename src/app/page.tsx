import Image from "next/image";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <div className="h-[5000px] flex flex-col py-24">
      <Landing />
    </div>
  );
}
