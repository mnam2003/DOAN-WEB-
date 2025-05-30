/* eslint-disable @typescript-eslint/no-explicit-any */
import AboutComponent from "@/components/AboutComponent";
import HeadComponent from "@/components/HeadComponent";
import HeroComponent from "@/components/HeroComponent";
import MenuComponent from "@/components/MenuComponent";
import ReservationsComponent from "@/components/ReservationsComponent";
import SubscribeComponent from "@/components/SubscribeComponent";
import { appInfo } from "@/constants/appInfo";
import { CategoryModel } from "@/models/CategoryModel";


const Home = (data: any) => {
  const pageProps = data
  const {categoryParent}: { categoryParent: CategoryModel[] } = pageProps

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

    const resCate = await fetch(`${appInfo.baseURL}/dish/get-all-categories`)
    const categories = await resCate.json()

    const resDish = await fetch(`${appInfo.baseURL}/dish`)
    const dish = await resDish.json()

    return {
      props: {
        promotion: promotion.data,
        categoryParent: categoryParent.data,
        dishes: dish.data,
        categories: categories.data,
      },
    }
  } catch (error) {
    console.error(error)
   return {
      props: {
        promotion: [],
        categoty: [],
        dish: [],
        categories: [],
      },
    }
  }
}

export default Home