import AboutComponent from "@/components/AboutComponent";
import HeadComponent from "@/components/HeadComponent";
import HeroComponent from "@/components/HeroComponent";
import ReservationsComponent from "@/components/ReservationsComponent";
import SubscribeComponent from "@/components/SubscribeComponent";


export default function Home() {
  return (
    <>
      <div>
        <HeadComponent />
      </div>
      <div>
        <HeroComponent />
      </div>
      <div className="my-5 py-10">
        <AboutComponent />
      </div>
      <div className="my-5 py-10">
        <ReservationsComponent/>
      </div>
      <div className="my-5 py-10">
        <SubscribeComponent/>
      </div>
    </>
  );
}
