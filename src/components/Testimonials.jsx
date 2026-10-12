import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Neha Sharma",
    city: "Sector 56, Gurgaon",
    message:
      "I booked a surprise birthday decoration for my husband, and everything looked exactly as promised. The team arrived on time and completed the setup beautifully. Highly recommended!",
  },
  {
    name: "Amit Verma",
    city: "DLF Phase 3, Gurgaon",
    message:
      "The anniversary room decoration was elegant and well-organized. The balloons, candles, and flower arrangement created a perfect surprise. Thank you for making our evening memorable.",
  },
  {
    name: "Priya Singh",
    city: "Sector 46, Gurgaon",
    message:
      "We booked a baby welcome decoration at the last minute, and the team managed everything perfectly. The decoration looked amazing, and everyone in the family loved it.",
  },
  {
    name: "Rahul Malhotra",
    city: "Sushant Lok, Gurgaon",
    message:
      "Very professional service with good quality decorations. They listened to our requirements and delivered exactly what we wanted. Definitely booking again for future celebrations.",
  },
  {
    name: "Sneha Kapoor",
    city: "Sector 51, Gurgaon",
    message:
      "The proposal decoration was absolutely beautiful. Every detail was carefully arranged, and the photos turned out amazing. Thank you for making our special day unforgettable.",
  },
  {
    name: "Karan Mehta",
    city: "Palam Vihar, Gurgaon",
    message:
      "Excellent experience from booking to decoration. The team was polite, punctual, and the entire setup exceeded our expectations. Great value for money.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Show only 3 cards
  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="w-full bg-[#f2f2f2] py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl text-black font-bold mb-14">
          Our Clients Say!
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {visibleTestimonials.map((item, index) => {
            const active = index === 1;

            return (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  active ? "scale-100" : "scale-95"
                }`}
              >
                {/* Name */}
                <h3 className="text-2xl font-bold text-black">
                  {item.name}
                </h3>

                {/* City */}
                <p className="text-gray-500 text-xl mt-1 mb-6">
                  {item.city}
                </p>

                {/* Message Box */}
                <div
                  className={`p-8 min-h-[180px] flex items-center justify-center text-center transition-all duration-500
                  ${
                    active
                      ? "bg-pink-700 text-white"
                      : "bg-[#e9e9e9] text-gray-500"
                  }`}
                >
                  <p className="text-lg leading-10">{item.message}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 border border-gray-400 transition-all duration-300
                ${current === index ? "bg-pink-700 border-pink-600" : "bg-white"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;