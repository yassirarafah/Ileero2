import React from "react";
import Why_choose_here from "./Section/Why_choose_here";
import How_Card_Work from "./Section/How_Card_Work"
import Testimonials from "./Testimonials";

const HomeSection = () => {
    return (
      <section className="Section_one">
      <div className="First_line">
      <h1 className="Heading_line">Why Choose Ileero Remit</h1>
      <p className="Paragraph_line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum <br />
                        recusandae, pariatur facere ea accusantium nesciunt nam!.</p>
      </div>
      <div className="Why_choose_me">
           <Why_choose_here />
           <Why_choose_here />
           <Why_choose_here />
        </div>
        <div className="Why_choose_me">
           <Why_choose_here />
           <Why_choose_here />
           <Why_choose_here />
        </div>
        <section className="World_Name p-10 py-20 bg-[#011A1D] min-h-screen">
            <div className="first_int flex flex-col items-center justify-center text-white space-y-5">
                 <h2 className="text-3xl font-bold text-center white">Send Money to Countries around the globe</h2>
                   <p className="font-bold text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit.
Omnis doloremque ad mollitia atque quibusdam.</p>
<center>
<button className="Transaction pointer text-center rounded flex items-center justify-center font-semibold">Transfer Partners</button>
</center>       
<div className="flex items-center mt-10 ">
           <center>
           <img src="/world.png" alt="" className="object-cover world_img" srcset="" />
           </center>
          </div>
     </div>
        </section>
        <section className="how bg-white p-10 py-20 min-h-screen">
        <div>
            <h1 className="text-3xl font-bold text-center">How it works</h1>
            <p className="text-center text-sm font-normal mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              adipisicing elit.
              <br /> Omnis doloremque ad mollitia atque quibusdam.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  max-w-6xl gap-2 mt-10 mx-auto">
          <How_Card_Work />
        </div>
        </section>
        <section className="bg-[#EFF7FF] h-[450px]">
             <div id="Run_Around" className="">
             <div className="w-[100%]">
            <img src="./Mask Group 66.png" className="object-cover" alt="" srcset=""/>
          </div>
          <div className="justify-center text-black space-y-5">
              <div className="relative -top[40px] items-center justify-start py-28 pl-5">
                <h1 className="text-3xl font-bold text-start">
                  Fastest way to send <br /> money online
                </h1>
                <p className="text-start text-sm font-normal mt-4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit
                  amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut
                </p>
              </div>
            </div>
             </div>
        </section>
        <section>
            <Testimonials />
        </section>
       
      </section>
      
    )
}

export default HomeSection;