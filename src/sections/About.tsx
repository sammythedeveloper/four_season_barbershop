import AboutIcon from "@/assets/images/download.svg";
// export const AboutSection = () => {
//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-2 pointer-events-none">
//         {/* Dynamic mesh squares */}
//         {Array.from({ length: 100 }).map((_, index) => (
//           <div
//             key={index}
//             className="w-10 h-10 bg-gray-300 opacity-20 animate-mesh"
//           ></div>
//         ))}
//       </div>
//       <AboutIcon className=" text-blue-500" />
//       <div className="relative z-10 text-white text-center p-10">
 
//       </div>
//     </div>
//   );
// };

export const AboutSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-white bg-[linear-gradient(to_right,#e5e7eb_2px,transparent_2px),linear-gradient(to_bottom,#e5e7eb_2px,transparent_2px)] bg-[size:40px_40px] opacity-20 z-0"></div>

      {/* Main Content */}
      <div className="z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black">
          Four Season Barbershop
        </h1>
        <AboutIcon className=" text-blue-500" />
        <p className="mt-4 text-xl sm:text-2xl text-gray-600">
          web developer and content creator
        </p>
  
      </div>

      {/* Star Logo */}
   
    </section>
  );
}