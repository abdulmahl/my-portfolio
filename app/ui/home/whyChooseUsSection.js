import React from 'react'

export default function WhyChooseUsSection() {
  return (
    <section className="p-3 md:p-5 lg:p-10">
      <h2 className="text-green-500 mb-3 font-semibold text-2xl md:text-4xl">
        Why Choose Us
      </h2>
      <div className="text-yellow-500 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Trusted Expertise
          </h3>
          <p>
            Over 15 years of industry experience with 500+ successful solar
            installations.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Top-Quality Products</h3>
          <p>
            We use industry-leading solar panels backed by robust warranties.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Customer Satisfaction
          </h3>
          <p>
            Our customer-centric approach ensures a smooth, hassle-free
            experience from start to finish.
          </p>
        </div>
      </div>
      <div className="text-yellow-500 grid gap-8 md:gap-20 md:grid-cols-2 mt-10 lg:gap-[24%]">
        <div>
          <h3 className="text-xl font-semibold mb-2">A Greener Future</h3>
          <p>
            Join us in our mission to reduce carbon footprints and promote
            renewable energy.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Affordable and Flexible Financing
          </h3>
          <p>
            Explore our financing options to make the switch to solar more
            affordable.
          </p>
        </div>
      </div>
    </section>
  );
}
