import react from "react";
import { Disclosure } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa";

const FAQ = () =>{
    return(
        <section className="faq ">
                <div className="flex flex-col items-center justify-center text-black space-y-5">
            <div>
              <h1 className="text-3xl font-bold text-center">FAQ</h1>
              <p className="text-center text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore <br /> et dolore magna
                aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
        </section>
    )
}