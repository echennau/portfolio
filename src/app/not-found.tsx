import Blob from "@/components/landing/Blob";

export default function Custom404() {
  return (
    <div className="w-full flex-1 relative flex flex-col justify-center items-center">
      <div className="absolute p-8 overflow-visible -translate-y-72">
        <Blob />
      </div>
      <span className="text-9xl font-bold z-20">404</span>
      <span className="text-4xl font-bold text-center z-20">
        The page you are looking for does not exist.
      </span>
    </div>
  );
}
