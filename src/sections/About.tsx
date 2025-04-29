import AboutIcon from "@/assets/images/download.svg";
export const AboutSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
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
          before:bg-[radial-gradient(circle,#e5e7eb33_1px,transparent_1px)] before:bg-[size:40px_40px] before:opacity-10"
        ></div>
      {/* Main Content */}
      <div className="z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black">
          Four Season Barbershop
        </h1>
        <AboutIcon className=" text-blue-500" />
        <p className="mt-4 text-xl sm:text-2xl text-gray-600">Men care Salon</p>
      </div>
      {/* Star Logo */}
    </section>
  );
};
