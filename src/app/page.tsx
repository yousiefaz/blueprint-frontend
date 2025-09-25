import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import FeatureBlock from "@/components/FeatureBlock";
import Heading from "@/components/Heading";
import { CLIENTS } from "@/constants/clients";
import { FEATURES, FEATURES_BLOCK } from "@/constants/features";
import { ArrowRightCircle, MoveRight } from "lucide-react";
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
          src="/backgrounds/bg2.png"
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
                Get a complete view of customers and business at a glance. Track
                leads, sales, and interactions in one place with real-time
                analytics to make smarter decisions and grow.
              </p>
              <div className="flex items-center gap-4">
                <Button>Start Your Free Trial</Button>
                <Link href={"#pricing"}>
                  <Button variant="outline">Compare Plans</Button>
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
        {/* Home Section */}

        {/* Clients Section */}
        <section
          id="Clients"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {CLIENTS.map((client, index) => (
            <Image
              key={index}
              src={client.imageUrl}
              width={600}
              height={600}
              alt={client.alt}
              className="w-20 md:w-full mx-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </section>
        {/* Clients Section */}

        {/* Features Section */}
        <section
          id="features"
          className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28 "
        >
          {/* Part-1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="absolute inset-0 -z-50">
              <Image
                src="/backgrounds/bg3.png"
                alt="banner"
                fill
                className="object-cover opacity-5"
                priority
              />
            </div>
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Features that simplify sales, centralize leads, and keep the focus on your customers." />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
                Our CRM gives you the tools to organize leads, simplify sales,
                and strengthen customer relationships. With intuitive features
                and real-time insights, you can focus on what matters most:
                building connections and closing deals faster.
              </p>
              <Button>Boost Your Sales Now</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {FEATURES.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
          {/* Part-1 */}

          {/* Part-2 */}
          {FEATURES_BLOCK.map((item, index) => (
            <FeatureBlock key={index} {...item} />
          ))}
          {/* Part-2 */}
        </section>
        {/* Features Section */}

        {/* Pricing Section */}
        <PricingSection />
        {/* Pricing Section */}

        {/* Testimonials Section */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="what our users say" isCentered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>
        {/* Testimonials Section */}

        {/* Contact Section */}
        <section id="contact">
          <div className="flex flex-col gap-6 lg:flex-row justify-between items-center bg-slate-800 rounded-lg px-8 py-8 lg:px-24 lg:py-12 ">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <Heading title="Ready to get started?" />
              <p className="max-w-[35rem] leading-normal text-lg">
                Join thousands of companies around the world that have
                revolutionized their sales and customer relationships with our
                cutting-edge CRM. Start your free trial today and experience the
                power of our platform for yourself.
              </p>
            </div>
            <Button>
              Experience It Now
              <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
        {/* Contact Section */}
      </div>
    </main>
  );
};

export default Home;
