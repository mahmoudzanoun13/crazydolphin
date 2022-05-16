import React from 'react';
import fishImage from '../../assets/images/fish_image.jpg';
import { OwnerAndTeam } from '../OwnerAndTeam/OwnerAndTeam';
import scubaDiving from '../../assets/images/scuba_diving.png';

export const AboutUsContent = () => {
  return (
    <div className="bg-gray-800 mt-28">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">About us</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <OwnerAndTeam />
      <div className="grid md:grid-cols-2">
        <div className="container mx-auto px-4 py-10">
          <img className="rounded-lg w-auto h-auto" src={fishImage} alt="fish_image" />
        </div>
        <div className="container mx-auto px-4 py-10">
          <h4 className="text-xl font-medium text-white py-8">Meet Crazy Dolphin</h4>
          <p className="text-gray-400">
            Crazy Dolphin is located at the marina of Sunny Days El Palacio hotel.<br/><br/>
            Our professional and multilingual staff with many years of experience is ready to give you an amazing holiday whether it is above or below the water.<br/><br/>
            We put our S.S.S. mission to provide good Service, Safety and Security.<br/><br/>
            We offer daily diving and dive courses (PADI, NDL), snorkeling, sea trips and excursions. We have insurance for all our guests.
          </p>
        </div>
      </div>
      <h5 className="text-white text-center text-2xl md:text-4xl font-semibold py-6 my-14">OUR POLICY</h5>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="grid md:grid-cols-2 justify-center">
        <div className="container mx-auto px-4 py-10 ">
          <p className="text-gray-400 md:w-[108%]">
            Crazy Dolphin Diving Center ("us", "we" or "our") operates http://www.crazy-dolphin.com (the "Site"). This page<br/>
            informs you of our policies regarding the collection, use and disclosure of Personal Information we receive<br/>
            from users of the Site.<br/>
            We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the<br/>
            collection and use of information in accordance with this policy.<br/><br/><br/>
          </p>
          <h4 className="text-xl font-medium text-white py-8">Information Collection and Use</h4>
          <p className="text-gray-400 md:w-[108%]">
            While using our Site, we may ask you to provide us with certain personally identifiable information that can be<br/>
            used to contact or identify you. Personally identifiable information may include, but is not limited to your name<br/>
            ("Personal Information").<br/><br/><br/>
          </p>
          <h4 className="text-xl font-medium text-white py-8">Communications</h4>
          <p className="text-gray-400 md:w-[108%]">
            We may use your Personal Information to contact you regarding your inquiry, questions and providing<br/>
            additional information concerning your inquiry; newsletters, promotional materials and others.<br/><br/><br/>
          </p>
          <h4 className="text-xl font-medium text-white py-8">Security</h4>
          <p className="text-gray-400 md:w-[108%]">
            The security of your Personal Information is important to us, but remember that no method of transmission<br/>
            over the Internet or method of electronic storage is 100% secure. While we strive to use commercially<br/>
            acceptable means to protect your Personal Information, we cannot guarantee its absolute security.<br/><br/><br/>
          </p>
          <h4 className="text-xl font-medium text-white py-8">Changes to This Privacy Policy</h4>
          <p className="text-gray-400 md:w-[108%]">
            This Privacy Policy is effective as of May 2018 and will remain in effect except with respect to any changes in<br/>
            its provisions in the future, which will be in effect immediately after being posted on this page.<br/>
            We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy<br/>
            Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on<br/>
            this page will constitute your acknowledgment of the modifications and your consent to abide and be bound<br/>
            by the modified Privacy Policy.<br/>
            If we make any material changes to this Privacy Policy, we will notify you either through the email address you<br/>
            have provided us, or by placing a prominent notice on our website.<br/><br/><br/>
          </p>
        </div>
        <div className="container mx-auto px-4 py-10 w-3/4">
          <img className="rounded-lg w-auto h-auto" src={scubaDiving} alt="fish_image" />
        </div>
      </div>
      <div className="container mx-auto px-4 md:grid md:place-items-center">
        <hr className="w-full md:w-2/3 h1 text-white mt-28 pb-28" />
      </div>
    </div>
  )
}
