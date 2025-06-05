import Image from "next/image";

function Card({
  title,
  text,
  img,
}: {
  title: string;
  text: string;
  img: string;
}) {
  return (
    <div className="h-screen card-section shrink-0 px-22 w-screen flex items-center justify-center">
      <div className="w-full flex justify-center items-center rounded-2xl h-3/4 relative">
        <div className="absolute top-0 left-0 h-full w-full px-12 -z-1 pointer-events-none">
          <div className="h-full w-full bg-black rounded-2xl" />
        </div>
        <div className="relative flex w-full h-5/6 z-10 items-center justify-center gap-12">
          <div className="w-1/2 h-full rounded-2xl overflow-hidden relative flex items-center justify-center">
            <Image
              src={img}
              alt="idk some random image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-1/2 pt-15 h-full lg:p-15 xl:p-25 flex flex-col pr-20 ">
            <p className="text-5xl mb-15 font-lustria font-bold">{title}</p>
            <p className="text-3xl font-babas-neue">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
