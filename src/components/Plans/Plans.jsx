import "./Plans.css";
import PlanCard from "./PlanCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { broadbandPlans } from "../../data/plansData";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Plans() {
  

  return (
    <section className="plans">

      <div className="section-title">
        <h2>Popular Broadband Plans</h2>
        <p>
          Choose the perfect Netplus broadband plan for your home or office.

        </p><p> </p>
      </div>

     <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  loop={true}
  spaceBetween={30}
  breakpoints={{
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>

  {broadbandPlans.map((plan) => (
    <SwiperSlide key={plan.id}>
      <PlanCard
        name={plan.name}
        speed={plan.speed}
        price={plan.price}
        popular={plan.popular}
      />
    </SwiperSlide>
  ))}

</Swiper>

    </section>
  );
}

export default Plans;