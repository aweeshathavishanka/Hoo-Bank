import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={` flex flex-row rounded-[20px] p-6 ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}>
    <div
      className={` w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className=" w-[50%] h-[50%] object-contain" />
    </div>
    <div className=" flex-1 flex flex-col ml-3">
      <h4 className=" font-poppins font-semibold text-white text-[18px] leading-[23px]">
        {title}
      </h4>
      <p className=" font-poppins font-normal text-dimWhite text-[18px] leading-[23px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the Business ,<br className=" sm:block hidden" />
          we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut modi
          quia. Perspiciatis quo cumque numquam fugiat sapiente. Ratione vero,
          nihil sed tempore impedit libero ipsa maiores nemo ab odio?
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
