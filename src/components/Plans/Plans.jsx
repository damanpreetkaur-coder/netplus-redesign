import "./Plans.css";
import PlanCard from "./PlanCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Plans() {
  const plans = [
    {
      id: 1,
      name: "Silver",
      speed: "100",
      price: "₹499",
      popular: false,
    },
    {
      id: 2,
      name: "Silver Pro",
      speed: "150",
      price: "₹599",
      popular: false,
    },
    {
      id: 3,
      name: "Gold",
      speed: "200",
      price: "₹699",
      popular: false,
    },
    {
      id: 4,
      name: "Gold Pro",
      speed: "250",
      price: "₹799",
      popular: true,
    },
    {
      id: 5,
      name: "Diamond",
      speed: "400",
      price: "₹999",
      popular: false,
    },
    {
      id: 6,
      name: "Diamond Pro",
      speed: "500",
      price: "₹1299",
      popular: false,
    },
    {
      id: 7,
      name: "Platinum",
      speed: "600",
      price: "₹1499",
      popular: false,
    },
    {
      id: 8,
      name: "Spark",
      speed: "1000",
      price: "₹2499",
      popular: false,
    },
  ];

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

  {plans.map((plan) => (
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