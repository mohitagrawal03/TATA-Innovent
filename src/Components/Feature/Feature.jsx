import React from "react";

const Feature = () => {
  return (
    <div>
      <section class="py-32 bg-gray-100">
        <div class="container mx-auto text-center">
          <h2 class="text-sm text-blue-600 font-semibold">Core Features</h2>
          <h3 class="mt-2 text-3xl font-bold text-gray-900">
            Our Awesome Features
          </h3>
          <p class="mt-4 text-gray-600">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
          <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="p-6 bg-white rounded-lg shadow-lg">
              <img
                class="w-full h-40 object-cover"
                src="https://symbl.ai/wp-content/uploads/2021/07/AspectSA2.png"
                alt="Feature 1"
              />
              <h4 class="mt-4 text-lg font-semibold text-gray-900">
                Feedback Analysis
              </h4>
              <p class="mt-2 text-gray-600">
                This is an excellent option for people & small businesses who
                are starting out.
              </p>
              <a
                href="#"
                class="inline-block mt-4 text-blue-600 hover:underline"
              >
                Learn More →
              </a>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-lg">
              <img
                class="w-full h-40 object-cover"
                src="https://media.istockphoto.com/id/1431411681/vector/car-front-icon-silhouette-symbol-car-sign-in-linear-style.jpg?s=612x612&w=0&k=20&c=5ZBdsn3X507MKNQqm2dtSo0HZ1D5ATMfvPn1UAbqwOY="
                alt="Feature 2"
              />
              <h4 class="mt-4 text-lg font-semibold text-gray-900">
                TATA Lens
              </h4>
              <p class="mt-2 text-gray-600">
                This is an excellent option for people & small businesses who
                are starting out.
              </p>
              <a
                href="#"
                class="inline-block mt-4 text-blue-600 hover:underline"
              >
                Learn More →
              </a>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-lg">
              <img
                class="w-30 h-40 mx-auto"
                src="https://media.istockphoto.com/id/1010001882/vector/%C3%B0%C3%B0%C2%B5%C3%B1%C3%B0%C3%B1%C3%B1.jpg?s=612x612&w=0&k=20&c=1jeAr9KSx3sG7SKxUPR_j8WPSZq_NIKL0P-MA4F1xRw="
                alt="Feature 3"
              />
              <h4 class="mt-4 text-lg font-semibold text-gray-900">Chatbot</h4>
              <p class="mt-2 text-gray-600">
                This is an excellent option for people & small businesses who
                are starting out.
              </p>
              <a
                href="/chatbot"
                class="inline-block mt-4 text-blue-600 hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
