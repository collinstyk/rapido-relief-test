import React, { useState } from "react";
import Header from "./header";
import Hero from "./Hero";
import Option from "./Option";
import Vision from "./Vision";
import Help from "./Help";
import Telehealth from "./Telehealth";
import Relief from "./Relief";
import Feature from "./Feature";
import Jobs from "./Jobs";
import Esg from "./Esg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Subscribe from "./Subscribe";
import Joinus from "./Joinus";
import Travaltime from "./Travaltime";
// import ChatBot from "../Chatbot";
import ProviderMarketplace from "./provider-arketplace";
import FAQSection from "./faq-section";
import HowRapidoReliefWorks from "./HowRapidoReliefWorks";
import Modal from "../Modal/index";
import { useModal } from "../../Contexts/ModalContext";
import Signup from "../Register/Register";
import Login from "../Login";
import { useTranslation } from "react-i18next";
import PartnerDialog from "./Dilogbox/Partner";

export default function Index() {
  const { t } = useTranslation();
  const { isModalVisible, modalContent } = useModal();
  const [partnerDialogOpen, setPartnerDialogOpen] = useState(false);

  return (
    <div className="f-f-r m-0 w-lvw p-0" id="home">
      {/* <ChatBot/> */}
      <PartnerDialog
        open={partnerDialogOpen}
        handleOpen={() => setPartnerDialogOpen((open) => !open)}
      />
      <div className={`herobg w-full bg-cover bg-center bg-no-repeat`}>
        {/* <Header /> */}
        <Navbar />
        <Hero />
      </div>
      <Modal isVisible={isModalVisible}>
        {modalContent === "signup" ? <Signup /> : <Login />}
      </Modal>
      <HowRapidoReliefWorks />
      <div className="bg-[#f6fbf4] py-[88px]">
        <h1 className="f-f-m mx-auto mb-[34px] w-11/12 text-center text-6xl text-green-dark sm:w-fit sm:text-7xl md:text-10xl">
          {t("home.seeADoctor")}
        </h1>
        <Option />
        <Vision />
      </div>
      <Help />
      <ProviderMarketplace
        btnOnClick={() => setPartnerDialogOpen((open) => !open)}
      />
      <Telehealth />
      <FAQSection />
      <Jobs />
      <Travaltime />
      <Joinus />
      <Esg />
      <Subscribe />

      {/* <Relief />
      <Feature /> */}
      <Footer />
    </div>
  );
}
