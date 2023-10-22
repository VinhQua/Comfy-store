import React from "react";
import image1 from "../../../assets/hero1.webp";
import image2 from "../../../assets/hero2.webp";
import image3 from "../../../assets/hero3.webp";
import image4 from "../../../assets/hero4.webp";
import Link from "next/link";
import Image from "next/image";
const images = [image1, image2, image3, image4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          we are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet eius
          libero, molestiae et incidunt dolore tempora voluptatibus nulla magnam
          sapiente, illo, temporibus consequatur repudiandae iure? Repudiandae
          veritatis aperiam animi vitae.
        </p>
        <div className="mt-10">
          <Link href={"/products"} className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <Image
              src={image}
              alt=""
              className="rounded-box h-full w-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
