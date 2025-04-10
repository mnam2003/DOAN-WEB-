import AboutComponent from "@/components/AboutComponent";
import HeadComponent from "@/components/HeadComponent";
import HeroComponent from "@/components/HeroComponent";

export default function Home() {
  return (
    <>
      <div>
        <HeadComponent />
      </div>
      <div>
        <HeroComponent />
      </div>
      <div className="my-5 py-10"     >
        <AboutComponent />
      </div>
    </>
  );
}
