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
    <div className="h-screen card-section shrink-0 md:px-22 w-screen flex items-center justify-center">
      <div className="w-full flex  justify-center items-center rounded-2xl h-3/4 relative">
        <div className="absolute hidden md:block top-0 left-0 h-full w-full px-12 -z-1 pointer-events-none">
          <div className="h-full w-full bg-black rounded-2xl" />
        </div>
        <div className="relative md:flex-row flex-col-reverse bg-[#0a0a0a] rounded-2xl md:bg-transparent md:mx-0 mx-10 flex w-full h-5/6 z-10 items-center justify-center gap-12">
          <div className="md:w-1/2 w-full h-3/5 md:h-full rounded-b-2xl md:rounded-2xl overflow-hidden relative flex items-center justify-center">
            <Image
              src={img}
              alt="idk some random image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className=" w-full  px-6 pt-3 md:w-1/2 md:pt-15 h-2/5 md:h-full lg:p-15 xl:p-25 flex flex-col md:pr-20 ">
            <p className=" mb-3 text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl md:mb-15 font-lustria font-bold">{title}</p>
            <p className=" md:text-2xl lg:text-4xl 2xl:text-5xl font-babas-neue">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
