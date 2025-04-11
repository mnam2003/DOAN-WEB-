import AboutComponent from "@/components/AboutComponent";
import HeadComponent from "@/components/HeadComponent";
import HeroComponent from "@/components/HeroComponent";
import MenuComponent from "@/components/MenuComponent";
import ReservationsComponent from "@/components/ReservationsComponent";
import SubscribeComponent from "@/components/SubscribeComponent";
import { appInfo } from "@/constants/appInfo";
import { CategoryModel } from "@/models/CategoryModel";
import { DishModel } from "@/models/DishModel";
import { PromotionModel } from "@/models/PromotionModel";


const Home = (data: any) => {
  const pageProps = data
  const {promotion, categoryParent, dishes}: {promotion: PromotionModel[], categoryParent: CategoryModel[], dishes: DishModel[]} = pageProps
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
        <MenuComponent categoryParent={categoryParent}/>
      </div>
      <div className="my-5 py-10">
        <SubscribeComponent/>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch(`${appInfo.baseURL}/promotion`)
    const promotion = await res.json()

    const resCategory = await fetch(`${appInfo.baseURL}/dish/get-parent-category`)
    const categoryParent = await resCategory.json()

    const resDish = await fetch(`${appInfo.baseURL}/dish`)
    const dish = await resDish.json()

    return {
      props: {
        promotion: promotion.data,
        categoryParent: categoryParent.data,
        dishes: dish.data,
      },
    }
  } catch (error) {
   return {
      props: {
        promotion: [],
        categoty: [],
        dish: [],
      },
    }
  }
}

export default Home