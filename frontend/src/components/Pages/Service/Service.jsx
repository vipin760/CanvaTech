import React from "react";
import Container from "../../Container/Container";
import "./Service.css";
import marketing_consult from "/marketing-ideas.png";
import marketing from "/marketing.png";
import mobileapp from "/mobile-app.png";
import personelblog from "/personel-blog.png";
import socialMedia from "/social-media.png";
import webdev from "/webdevelop.png";

const data = [
  {
    icon: marketing,
    title: "MARKETING CONSULTAND",
    description:
      "Transform your digital presence with our expert marketing services",
  },
  {
    icon: mobileapp,
    title: "Mobile App Development",
    description: "Your app dreams, our expertise. Let's make it happen",
  },
  {
    icon: webdev,
    title: "Web Development",
    description: "From design to functionality, we've got you covered",
  },
  {
    icon: socialMedia,
    title: "Social Media Branding",
    description:
      "Stand out in the digital crowd Custom branding strategies for social media success",
  },
  {
    icon: personelblog,
    title: "Personal Branding",
    description:
      "Your story, your brand. We craft compelling personal branding strategies for success",
  },
  {
    icon: marketing_consult,
    title: "Marketing Consultancy",
    description: "Helping businesses grow with smart marketing advice",
  },
];

const Service = () => {
  return (
    <Container>
      <section className="service flex justify-center" id="service">
        <div className="sm:flex md:max-w-5xl">
          <div className="flex items-center justify-center">
            <img
              src="https://www.appadore.com/images/mockup/home-mockup1.png"
              className="p-8 max-w-xs md:max-w-md sm:p-3 rounded-2xl"
              alt=""
            />
          </div>
          <div className="p-3 py-20">
            <h1 className="text-xl md:text-3xl font-bold text-center m-1 uppercase">
              Our Approach
            </h1>
            <p className="text-sm p-1">
              We adopt a highly collaborative and tech-driven approach to
              working with our clients. Doing so enables us to create accurate
              outcomes, minimise redundancies, and maintain the highest quality
              standards.
            </p>

            <div className="my-3">
              <ul className="my-4">
                <li className="my-4">
                  <div className="flex gap-4 justify-center">
                    {/* left */}
                    <div className="flex flex-col items-center gap-2 justify-between">
                      <h1 className="rounded-full border shadow-xl bg-white px-2 text-black hover:shadow-xl hover:text-white hover:bg-gradient-to-r  hover:from-[#4b7394] hover:to-[#c25dd4] transition-all ease-linear duration-300">
                        1
                      </h1>
                      <div className="h-4 w-4 bg-pink-400 rounded-full"></div>
                      <div className="h-3 w-3 bg-pink-400 rounded-full"></div>
                      <div className="h-2 w-2 bg-pink-400 rounded-full"></div>
                      <div className="h-1 w-1 bg-pink-400 rounded-full"></div>
                    </div>
                    {/* right */}
                    <div className="px-2">
                      <h1 className="sub_heading">INITIATE</h1>
                      <p className="text max-w-sm leading-loose ">
                        We gather relevant information from the customer to
                        develop a product as per their expectation. With
                        in-depth research and analysis of the idea, our team
                        will challenge any assumptions and to check the
                        feasibility of the development of a product.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="my-4">
                <div className="flex gap-4 justify-center">
                    {/* left */}
                    <div className="flex flex-col items-center gap-2 justify-between">
                      <h1 className="rounded-full border shadow-xl bg-white px-2 text-black hover:shadow-xl hover:text-white hover:bg-gradient-to-r  hover:from-[#4b7394] hover:to-[#c25dd4] transition-all ease-linear duration-300">
                        1
                      </h1>
                      <div className="h-4 w-4 bg-pink-400 rounded-full"></div>
                      <div className="h-3 w-3 bg-pink-400 rounded-full"></div>
                      <div className="h-2 w-2 bg-pink-400 rounded-full"></div>
                      <div className="h-1 w-1 bg-pink-400 rounded-full"></div>
                    </div>
                    {/* right */}
                    <div className="px-2">
                      <h1 className="sub_heading">INITIATE</h1>
                      <p className="text max-w-sm leading-loose">
                        We gather relevant information from the customer to
                        develop a product as per their expectation. With
                        in-depth research and analysis of the idea, our team
                        will challenge any assumptions and to check the
                        feasibility of the development of a product.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="my-4">
                <div className="flex gap-4 justify-center">
                    {/* left */}
                    <div className="flex flex-col items-center gap-2 justify-between">
                      <h1 className="rounded-full border shadow-xl bg-white px-2 text-black hover:shadow-xl hover:text-white hover:bg-gradient-to-r  hover:from-[#4b7394] hover:to-[#c25dd4] transition-all ease-linear duration-300">
                        1
                      </h1>
                      <div className="h-4 w-4 bg-pink-400 rounded-full"></div>
                      <div className="h-3 w-3 bg-pink-400 rounded-full"></div>
                      <div className="h-2 w-2 bg-pink-400 rounded-full"></div>
                      <div className="h-1 w-1 bg-pink-400 rounded-full"></div>
                    </div>
                    {/* right */}
                    <div className="px-2">
                      <h1 className="sub_heading">INITIATE</h1>
                      <p className="text max-w-sm leading-loose">
                        We gather relevant information from the customer to
                        develop a product as per their expectation. With
                        in-depth research and analysis of the idea, our team
                        will challenge any assumptions and to check the
                        feasibility of the development of a product.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="my-4">
                <div className="flex gap-4 justify-center">
                    {/* left */}
                    <div className="flex flex-col items-center gap-2 justify-between">
                      <h1 className="rounded-full border shadow-xl bg-white px-2 text-black hover:shadow-xl hover:text-white hover:bg-gradient-to-r  hover:from-[#4b7394] hover:to-[#c25dd4] transition-all ease-linear duration-300">
                        1
                      </h1>
                      <div className="h-4 w-4 bg-pink-400 rounded-full"></div>
                      <div className="h-3 w-3 bg-pink-400 rounded-full"></div>
                      <div className="h-2 w-2 bg-pink-400 rounded-full"></div>
                      <div className="h-1 w-1 bg-pink-400 rounded-full"></div>
                    </div>
                    {/* right */}
                    <div className="px-2">
                      <h1 className="sub_heading">INITIATE</h1>
                      <p className="text max-w-sm leading-loose">
                        We gather relevant information from the customer to
                        develop a product as per their expectation. With
                        in-depth research and analysis of the idea, our team
                        will challenge any assumptions and to check the
                        feasibility of the development of a product.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="my-4">
                <div className="flex gap-4 justify-center">
                    {/* left */}
                    <div className="flex flex-col items-center gap-2 justify-between">
                      <h1 className="rounded-full border shadow-xl px-2 text-black hover:shadow-xl hover:text-white hover:bg-gradient-to-r  hover:from-[#4b7394] hover:to-[#c25dd4] transition-all ease-linear duration-300">
                        1
                      </h1>
                      <div className="h-4 w-4 bg-pink-400 rounded-full"></div>
                      <div className="h-3 w-3 bg-pink-400 rounded-full"></div>
                      <div className="h-2 w-2 bg-pink-400 rounded-full"></div>
                      <div className="h-1 w-1 bg-pink-400 rounded-full"></div>
                    </div>
                    {/* right */}
                    <div className="px-2">
                      <h1 className="sub_heading">INITIATE</h1>
                      <p className="text max-w-sm leading-loose">
                        We gather relevant information from the customer to
                        develop a product as per their expectation. With
                        in-depth research and analysis of the idea, our team
                        will challenge any assumptions and to check the
                        feasibility of the development of a product.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center mt-9">
          <h1 className="text-xl sm:text-3xl font-bold text-center">
            OUR SERVICES
          </h1>
          <p className="text-sm text-center max-w-3xl">
            With 4+ years of experience, we’re dedicated to doing great work and
            getting real results. We’re the perfect match to help your business
            succeed.
          </p>
          <div className="flex flex-wrap justify-center max-w-4xl">
            {data.map((items, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center rounded-lg m-6 hover:shadow-xl p-2 py-4 w-56"
              >
                <img
                  className="box_shadow p-2 size-14 rounded-lg m-2"
                  src={items.icon}
                  alt=""
                />
                <h1 className="text-md font-bold text-center">{items.title}</h1>
                <p className="text-sm text-center p-3">{items.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Service;
