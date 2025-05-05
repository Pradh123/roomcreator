import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header'
import React from 'react'
import Link from 'next/link';

const index = () => {

  const aboutData = [
    {
      title: "About Us - Indian Rooms",
      content: (
        <p className="mb-5 mt-2 md:text-base text-para">
          Welcome to Indian Rooms – Your trusted online platform for finding and sharing PG (Paying Guest) 
          and hostel accommodations across India. Whether you&apos;re a student, a working professional, 
          or someone relocating for a short or long stay, 
          Indian Rooms is here to simplify your search for the perfect place to stay. 
          Our goal is to make the PG and hostel rental process quick, transparent, and hassle-free for everyone.
        </p>
      )
    },
    {
      title: "Who We Are",
      content: (
        <>
        <p className="mt-2 md:text-base text-para">
          Indian Rooms is more than just a listing website – It&apos;s a mutual support network for people looking for trusted PG and hostel accommodations. 
          With deep knowledge of the Indian rental market and years of experience, we help you find spaces that suit your needs and budget.
        </p>
        <p className="my-2 md:text-base text-para">
          We work closely with both tenants and owners, providing end-to-end support:
        </p>
        <ul className="list-disc ml-8 md:text-base text-para mb-5">
          <li>Searching and shortlisting PGs/hostels</li>
          <li>Scheduling viewings</li>
          <li>Negotiation support</li>
          <li>Finalizing rental or lease agreements</li>
          <li>Managing rental properties</li>
      </ul>
      </>
      )
    },
    {
      title: "Why Choose Indian Rooms?",
      content: (
        <>
        <p className="mt-2 md:text-base text-para">
          We understand that finding the right place to stay can be overwhelming – especially in a new city or under time pressure. 
          That is why we bring efficiency, trust, and local insights to the process.
        </p>
        <p className="my-2 md:text-base text-para">
          We operate on three core principles:        
        </p>
        <ul className="list-disc ml-8 md:text-base text-para mb-5">
          <li>Saving Your Time</li>
          <li>Saving Your Money</li>
          <li>Building Lasting Relationships</li>
        </ul>
      </>
      )
    },
    {
      title: "Who We Serve",
      content: (
        <>
        <p className="mt-2 mb-2 md:text-base text-para">
          Our platform is designed to support a wide range of users, including:
        </p>
        <ul className="list-disc ml-8 md:text-base text-para">
          <li>Students</li>
          <li>Working professionals</li>
          <li>Business travelers</li>
          <li>PG and hostel owners</li>
          <li>Short- and long-term renters</li>
          <li>Bed and breakfast providers</li>
          <li>Residential and commercial lease seekers</li>
        </ul>
        <p className="my-2 md:text-base text-para mb-5">
          Since 2019, we&apos;ve been meeting the unique accommodation needs of people across India&apos;s tourism, education, and service sectors.       
        </p>
      </>
      )
    },
    {
      title: " Join Our Community",
      content: (
      <>
        <p className="mt-2 md:text-base text-para">
          Whether you&apos;re searching for a place to stay or looking to list your property, Indian Rooms offers a reliable and user-friendly 
          platform to connect with the right people. Share your property, post your requirements, and let us handle the rest.
        </p>
        <p className="my-2 md:text-base text-para">
          For any inquiries or to learn more about how we can help you, feel free to contact us at :        
        </p>
        <p className='mb-5'>
          <span className="font-medium md:text-base text-para">General Inquiries : </span>
          <Link href="mailto: info@indianrooms.com" target="_blank" className="text-teal-700 md:text-base text-para underline underline-offset-2">
            info@indianrooms.com
          </Link>
        </p>
      </>
      )
    },
  ]
  return (
    <>
        <Header />
        {/* Herosection */}
        <div
          className="md:min-h-[70vh] min-h-[60vh] w-full bg-cover bg-center relative flex items-center justify-center"
          style={{ backgroundImage: "url('/assets/gurugram.jpg')", }}
        >
          <div className="bg-black/70 w-full h-full absolute top-0 left-0 z-0"></div>
          <div className="relative z-10 text-center px-6">
            <h2 className="text-white font-semibold lg:text-[40px] md:text-[34px] text-xl md:mb-6 mb-4 capitalize">
              Your Trusted Partner in Finding the Right PG
            </h2>
            <p className="text-white capitalize md:text-md text-para">Experience comfort, wherever you go</p>
          </div>
        </div>
        {/* About section */}
        <div className="pt-10">
          <h2 className="md:text-2xl text-xl font-semibold text-center md:mb-2 mb-0.5">About Us - Indian Rooms</h2>
          <div className="md:w-40 w-32 h-1 bg-teal-600 mx-auto mb-10 rounded-full"></div>
        </div>
        <div className="container-wrapper mx-auto pb-5">
          {aboutData?.map((about, i) => {
            return (
              <>    
                <div key={i} className="md:px-5 px-2 mb-8">
                  <h2 className="md:text-xl text-md font-semibold mb-2">{about.title}</h2>
                  {about.content}
                </div>
              </>
            )
          })}
        </div>
        <Footer />
    </>
  )
}

export default index;
