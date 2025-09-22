import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import FeatureBlock from "@/components/FeatureBlock";
import Heading from "@/components/Heading";
import { CLIENTS } from "@/constants/clients";
import { FEATURES, FeaturesBlock } from "@/constants/features";
import { ArrowBigRight, ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PricingSection } from "@/components/PricingSection";
import TestimonialCard from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/constants/testimonials";

const Home = () => {
  return (
    <main className="overflow-x-hidden lg:pt-24 antialiased flex items-center justify-center ">
      <div className="relative container">
        <Image
          src="/bg2.png"
          width={1920}
          height={1080}
          alt="background"
          className="absolute -z-50 w-full h-auto top-0 left-0 object-contain opacity-10"
        />

        {/* Home Section */}
        <section
          id="Home"
          className="w-full max-w-7xl mt-14 sm:mt-14 md:mt-12 lg:-mt-18 mx-auto px-4 sm:px-6 lg:px-8"
        >
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 -right-20 md:bottom-44 " />
          <div className="flex flex-col items-center text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="inline-flex items-center gap-1 capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all duration-200">
                new features are now available
                <ArrowRightCircle className="w-4 h-4 text-sky-400" />
              </p>
              <Heading title="All Your Customers, One View" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Get a complete view of your customers and business at a glance.
                Track leads, sales, and interactions in one place with real-time
                analytics to make smarter decisions and drive growth.
              </p>
              <div className="flex items-center gap-4">
                <Button>
                  Get Started
                  <MoveRight className="w-4 h-4" />
                </Button>
                <Link href={"#pricing"}>
                  <Button variant="outline">View Pricing</Button>
                </Link>
              </div>
            </div>
            <Image
              src={"/hero.svg"}
              width={670}
              height={370}
              alt="banner"
              className="mx-auto shadow-xl"
            />
          </div>
        </section>

        {/* Clients Section */}
        <section
          id="Clients"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {CLIENTS.map((client, index) => (
            <Image
              key={index}
              src={client.imageUrl}
              width={120}
              height={80}
              alt={client.alt}
              className="w-20 md:w-full mx-auto"
            />
          ))}
        </section>
        {/* Features Section */}
        <section
          id="features"
          className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28 "
        >
          {/* subSection - 1*/}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="absolute inset-0 -z-50">
              <Image
                src="/bg3.png"
                alt="banner"
                fill
                className="object-cover opacity-5"
                priority
              />
            </div>
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Features that simplify sales, centralize leads, and keep the focus on your customers." />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
                Our CRM equips you with the tools to organize leads, streamline
                your sales process, and strengthen customer relationships. With
                intuitive features and real-time insights, you can stay focused
                on what matters most—building connections and closing deals
                faster.
              </p>
              <Button>
                get started
                <ArrowBigRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {FEATURES.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
          {/* subSection - 2*/}
          {FeaturesBlock.map((item, index) => (
            <FeatureBlock key={index} {...item} />
          ))}
        </section>
        {/* Pricing Section */}
        <PricingSection />
        {/* Testimonials Section */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="what our users say" isCentered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </section>
        {/* Contact Section */}

        {/* Footer Section */}
      </div>
    </main>
  );
};

export default Home;
