import AboutIcon from "@/assets/images/download.svg";
export const Landing = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden ">
      {/* Grid Background */}
      <div
        className="absolute inset-0 rotate-[75deg] bg-white 
    bg-[linear-gradient(to_right,#e5e7eb_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e5e7eb_1.5px,transparent_1.5px)] 
    bg-[size:40px_40px] opacity-35 z-0 
    [mask-image:radial-gradient(circle_at_center,black_20%,transparent_70%)] 
    [mask-repeat:no-repeat] [mask-size:100%_100%] 
    before:absolute before:inset-0 before:animate-[pulsegrid_6s_ease-in-out_infinite] 
    before:bg-[radial-gradient(circle,#e5e7eb33_1px,transparent_1px)] 
    before:bg-[size:40px_40px] before:opacity-10"
      ></div>
      <div
        className="absolute inset-0 before:absolute before:inset-0 before:animate-[pulsegrid_6s_ease-in-out_infinite] 
          before:bg-[radial-gradient(circle,#e5e7eb33_1px,transparent_1px)] before:bg-[size:40px_40px] before:opacity-10 "
      ></div>
      {/* Main Content */}
      <div className="z-10 max-w-2xl w-full px-6 text-center flex flex-col items-center justify-center space-y-12">
        <p className="text-4xl md:text-6xl font-extrabold text-black">
          WE ARE FOUR SEASON STUDIOS
        </p>
        <p className=" text-center justify-center ">
          With a diverse team of skilled barbers, we offer a level of expertise
          and individuality that sets us apart. At Four Season Studios, it’s
          about more than just a haircut – it’s about setting a new standard.
        </p>
        <AboutIcon className=" text-blue-500" />
        <p className="mt-4 text-xl sm:text-2xl text-gray-600">Men care Salon</p>
      </div>
      {/* Star Logo */}
    </section>
  );
};
