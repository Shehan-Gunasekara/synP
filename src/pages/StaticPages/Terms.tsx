import React, { useState, useEffect } from "react";
import { Card } from "../../components/ui/Card";
import { ChevronRight } from "lucide-react";

interface Section {
  id: string;
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.`,
  },
  {
    id: "services",
    title: "Description of Services",
    content: `Our platform provides AI-powered video generation and lip-syncing services. We offer tools to create custom AI actors for content creation. The service is provided "as is" and we reserve the right to modify, suspend, or discontinue any aspect of the service at any time.`,
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    content: `Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms of Service, explains how we collect, use, and protect your personal information. By using our services, you agree to the collection and use of information in accordance with our Privacy Policy.`,
  },
  {
    id: "no_refund",
    title: "No Refund Policy",
    content: `All purchases and payments made for the use of our services are final and non-refundable. By using our services, you acknowledge and agree that no refunds will be provided under any circumstances, including but not limited to dissatisfaction with the service or cancellation of use.`,
  },
  {
    id: "content",
    title: "User Content",
    content: `You retain all rights to any content you submit, post, or display on or through the service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content.`,
  },
  {
    id: "restrictions",
    title: "Use Restrictions",
    content: `You agree not to use the service for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks. You also agree not to attempt to gain unauthorized access to any part of the service, other accounts, or computer systems through hacking or any other means.`,
  },
  {
    id: "intellectual",
    title: "Intellectual Property",
    content: `The service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.`,
  },
  {
    id: "termination",
    title: "Termination",
    content: `We may terminate or suspend your access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease.`,
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    content: `Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.`,
  },
];

export function Terms() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );

      const currentSection = sectionElements.find((element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="flex-1 max-w-7xl mx-auto px-6 py-24">
      <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-br from-black to-black/60 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-base lg:text-xl text-black/60">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-12">
        <div className="lg:sticky lg:top-32 lg:h-fit space-y-4">
          <Card className="p-4">
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-sm transition-colors ${
                    activeSection === section.id
                      ? "bg-black text-white"
                      : "hover:bg-gray-50 text-gray-600 hover:text-black"
                  }`}
                >
                  {section.title}
                  <ChevronRight
                    className={`w-4 h-4 ${
                      activeSection === section.id
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              ))}
            </nav>
          </Card>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-32">
              <h2 className="text-2xl font-medium mb-4">{section.title}</h2>
              <p className="text-black/60 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
