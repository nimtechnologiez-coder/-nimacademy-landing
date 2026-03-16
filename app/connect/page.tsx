"use client";

import React from "react";
import ConnectHero from "@/components/ConnectHero";
import WhyPartner from "@/components/WhyPartner";
import PartnerBenefits from "@/components/PartnerBenefits";
import ConnectContact from "@/components/ConnectContact";
import PageLoader from "@/components/PageLoader";

export default function ConnectPage() {
  return (
    <main className="bg-black min-h-screen">
      <PageLoader />
      <ConnectHero />
      <WhyPartner />
      <PartnerBenefits />
      <ConnectContact />
    </main>
  );
}
