import Image from "next/image";
import AboutIcon from "../../public/assets/images/download.svg";
import StartIcon from "../../public/assets/images/razor.svg";
import { HeroOrbit } from "@/components/Orbit";
import SparkleIcon from "../../public/assets/images/scissors.svg";
// import Blade from "../../public/assets/images/blade.svg";
// import Comb from "../../public/assets/images/both.svg";
import Shampoo from "../../public/assets/images/shampoo.svg";
// import Clean from "../../public/assets/images/clean.svg";
// import Shaver from "../../public/assets/images/shaver.svg";
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
        <p className=" text-center justify-center  ">
          With a diverse team of skilled barbers, we offer a level of expertise
          and individuality that sets us apart. At Four Season Studios, it’s
          about more than just a haircut – it’s about setting a new standard.
        </p>
        <Image
          src="/assets/images/download.svg"
          alt="About"
          className="  text-emerald-300/20 "
          width={696} height={264}
        />
        <p className="mt-4 text-2xl md:text-3xl font-extrabold text-black uppercase ">
          Experience finest grooming with precision haircuts, fades, shaves, and
          beard trims.
        </p>
        <div className=" absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
          <div className="size-[120px] hero-ring"></div>
          <div className="size-[120px] hero-ring"></div>
          <div className="size-[120px] hero-ring"></div>
          <div className="size-[120px] hero-ring"> </div>
          <HeroOrbit
            size={530}
            rotation={-24}
            shouldOrbit
            orbitDuration="30s  "
            shouldSpin
            spinDuration="3s"
          >
            <Image
              src="/assets/images/both.svg"
              alt="Both"
              className=" size-10 text-emerald-300/20 "
              width={64} height={64}
            />
          </HeroOrbit>
          <HeroOrbit
            size={530}
            rotation={178}
            shouldOrbit
            orbitDuration="36s"
            shouldSpin
            spinDuration="3s"
          >
            <Image
              src="/assets/images/blade.svg"
              alt="Blade"
              className=" size-20 text-emerald-300/20 "
              width={64} height={64}
            />
          </HeroOrbit>
          <HeroOrbit
            size={530}
            rotation={-78}
            shouldOrbit
            orbitDuration="36s"
            shouldSpin
            spinDuration="3s"
          >
            <Image
              src="/assets/images/shaver.svg"
              alt="shaver"
              className=" size-12 text-emerald-300/20 "
              width={64} height={64}
            />
          </HeroOrbit>
          <HeroOrbit size={350} rotation={-5} shouldOrbit orbitDuration="42s">
            <div className=" size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={650}
            rotation={20}
            shouldOrbit
            orbitDuration="38s"
            shouldSpin
            spinDuration="6s"
          ></HeroOrbit>
          <HeroOrbit
            size={590}
            rotation={98}
            shouldOrbit
            orbitDuration="40s"
            shouldSpin
            spinDuration="6s"
          >
            <Image
              src="/assets/images/razor.svg"
              alt="Razor"
              className=" size-20 text-emerald-300/20 "
              width={64} height={64}
            />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
            <div className=" size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={610}
            rotation={144}
            shouldOrbit
            orbitDuration="44s"
            shouldSpin
            spinDuration="3s"
          >
            <Image
              src="/assets/images/clean.svg"
              alt="clean"
              className=" size-20 text-emerald-300/20 "
              width={64} height={64}
            />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
            <div className=" size-3 rounded-full" />
          </HeroOrbit>
          <HeroOrbit
            size={510}
            rotation={124}
            shouldOrbit
            orbitDuration="44s"
            shouldSpin
            spinDuration="3s"
          >
            <Image
              src="/assets/images/scissors.svg"
              alt="Blade"
              className=" size-20 text-emerald-300/20 "
              width={64} height={64}
            />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
            <div className=" size-3 rounded-full" />
          </HeroOrbit>
          <HeroOrbit
            size={600}
            rotation={-52}
            shouldOrbit
            orbitDuration="48s"
            shouldSpin
            spinDuration="6s"
          >
            <Image
              src="/assets/images/shampoo.svg"
              alt="Shampoo"
              className=" size-20 text-emerald-300/20 "
              width={64} height={64}
            />
          </HeroOrbit>
        </div>
      </div>
      {/* Star Logo */}
    </section>
  );
};
