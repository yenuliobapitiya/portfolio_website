import Head from "next/head";
import Image from "next/image";

//images

import profileImage from "../public/p2.png";
import graphicDesign from "../public/design.png";
import code from "../public/code.png";
import image1 from "../public/web1.png"
import image2 from "../public/web2.png"
import image3 from "../public/web3.png"
import image4 from "../public/web3.png"
import image5 from "../public/web3.png"
import image6 from "../public/web3.png"


//icons

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {" "}
          @import 
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;800&display=swap');{" "}
        </style>
      </Head>

        <main className="font-poppins bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-40">
        {/* nav and hero */}
        <section>
          {/* nav */}
          <nav className="py-10 flex justify-between">
            <h1 className="text-sm md:text-xl">developed by yenuli obapitiya</h1>
            <ul className="flex items-center">
              {/* icon */}
              <li>
                <BsFillMoonStarsFill
                className="cursor-pointer text-xl mx-5"/>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1WGH980EuBmviKfsUmBsh1mN3yDebwNeJ/view?usp=sharing" download={"resume"} className="bg-yellow-400 text-black px-4 py-2 border-none rounded-md">Resume</a>
              </li>
            </ul>
          </nav>

          {/* hero */}
          <div className="text-center p-10">
            <h1 className="text-5xl font-bold text-yellow-400 md:text-6xl lg:text-7xl lg:mb-4">Yenuli Obapitiya</h1>
            <h3 className="text-2xl py-4 md:text-3xl">Website Developer with a Passion for Building Modern, Responsive Websites</h3>
            <p className="text-sm py-4 text-gray-400 leading-6 max-w-xl mx-auto md:text-md">I'm a dedicated student with a passion for website development.
               While continuing to learn and grow,
                I have developed a strong foundation in creating responsive,
                 user-friendly websites. I'm excited to take on new challenges 
                 and expand my skills through real-world projects.</p>
          </div>
          {/*social*/}
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <a href="https://github.com/yenuliobapitiya">
              <AiOutlineGithub/>
            </a>
            <a href="https://www.linkedin.com/in/yenuli-obapitiya-93b6b92b9/">
              <AiFillLinkedin/>
            </a>
            <a href="https://x.com/YObapitiya">
              <FaSquareXTwitter/>
            </a>
          </div>
          {/* profile */}
          <div className="m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80 p-5 mt-20 rounded-full">
            <Image src={profileImage} 
                   alt="profile image"  
                   layout="fill"  
                   objectFit="cover"  />
          </div>
        </section>
        {/* services */}
        <section>
          <div>
            <h2 className="text-5xl py-10 font-bold opacity-60">Services I Offer</h2>
            <p className="text-sm py-2 text-gray-400 leading-6">As a website developer,
               I offer a range of services designed to bring your online presence to life. 
               I specialize in creating modern, responsive websites that provide a seamless
               user experience across all devices. My skills include designing clean,
               visually appealing layouts, ensuring optimal performance, and integrating
               features tailored to your specific needs. Whether you’re looking for a personal blog,
               a business website, or a portfolio to showcase your work, I can help you build a 
               site that stands out and meets your goals.</p>
          </div>
          {/* services cards */}
          <div className="md:flex lg:flex gap-10 mx-auto">
            {/* card */}
            <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10 ">
              <Image src={graphicDesign} alt="design image" width={100} height={100} className="inline"/>
              <h2 className="text-2xl font-bold ">Graphic Designing</h2>
              <p className="text-sm py-2 text-gray-800 leading-6">I provide graphic design services that bring creativity and professionalism to your projects.
                 Whether you need eye-catching logos, stunning social media graphics, or polished presentation designs,
                 I ensure each piece is crafted to enhance your brand and deliver your message effectively.</p>
            </div>
            {/* card */}
            <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10 ">
              <Image src={graphicDesign} alt="design image" width={100} height={100} className="inline"/>
              <h2 className="text-2xl font-bold ">Websites Development</h2>
              <p className="text-sm py-2 text-gray-800 leading-6">I specialize in building responsive, user-friendly websites 
                that cater to your specific needs. Whether you need a personal blog, a business website, or a portfolio,
                 I ensure your site is optimized for all devices and offers a seamless user experience.</p>
            </div>
            {/* card */}
            <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10 ">
              <Image src={graphicDesign} alt="design image" width={100} height={100} className="inline"/>
              <h2 className="text-2xl font-bold ">Presentation Design</h2>
              <p className="text-sm py-2 text-gray-800 leading-6">I create professional, visually appealing presentations
                 using PowerPoint and Canva. My designs are crafted to effectively communicate your message, whether it's for 
                 business meetings, educational purposes, or personal projects.</p>
            </div>
          </div>
        </section>
        {/* section */}
        <section>
          <div>
          <h2 className="text-5xl py-10 font-bold opacity-60">Portfolio</h2>
          <p className="text-sm py-2 text-gray-400 leading-6">this is my portfolio</p>
          </div>
          {/* images */}
          <div className="flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap">
          <div>
            <Image src={image1} alt="images 1" layout="responsive" className="rounded-lg object-cover"/>
            </div>
            <div>
            <Image src={image2} alt="images 1" layout="responsive" className="rounded-lg object-cover"/>
            </div>
            <div>
            <Image src={image3} alt="images 1" layout="responsive" className="rounded-lg object-cover"/>
            </div>
            <div>
            <Image src={image4} alt="images 1" layout="responsive" className="rounded-lg object-cover"/>
            </div>
            <div>
            <Image src={image5} alt="images 1" layout="responsive" className="rounded-lg object-cover"/>
            </div>
            <div>
            <Image src={image6} alt="images 1" layout="responsive" className="rounded-lg object-cover"/>
            </div>
              
          </div>
        </section>
        {/* footer */}
        <footer className="boder-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10">
          <div>
            <h3 className="text-base mb-2">Contact me for more details</h3>
            <a href="mailto:yenuliobapitiya@gmail.com" className="email-link ">yenuliobapitiya@gmail.com</a>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <a href="https://github.com/yenuliobapitiya">
              <AiOutlineGithub/>
            </a>
            <a href="https://www.linkedin.com/in/yenuli-obapitiya-93b6b92b9/">
              <AiFillLinkedin/>
            </a>
            <a href="https://x.com/YObapitiya">
              <FaSquareXTwitter/>
            </a>
          </div>
        </footer>
        </main>
      </div>
  );
}
