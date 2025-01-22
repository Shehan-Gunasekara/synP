import React, { useState } from "react";
import { Card } from "../../components/ui/Card";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Server,
  Bell,
  UserCheck,
  HelpCircle,
} from "lucide-react";
import { Button } from "../../components/ui/Button";

interface PrivacySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
  expandable?: boolean;
  link?: string;
}

const sections: PrivacySection[] = [
  {
    id: "collection",
    title: "Information We Collect",
    icon: <Database className="w-6 h-6" />,
    content: `We collect information that you provide directly to us, including:
    • Account information (name, email, password)
    • Profile information
    • Payment information
    • Content you generate using our services
    • Communications with us
    We also automatically collect certain information about your device and how you interact with our services.`,
    expandable: true,
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    icon: <Server className="w-6 h-6" />,
    content: `We use the information we collect to:
    • Provide and maintain our services
    • Process your transactions
    • Send you technical notices and support messages
    • Communicate with you about products, services, and events
    • Monitor and analyze trends and usage
    • Detect, investigate, and prevent fraudulent transactions and other illegal activities
    • Protect our rights and property`,
    expandable: true,
  },
  {
    id: "sharing",
    title: "Information Sharing",
    icon: <Eye className="w-6 h-6" />,
    content: `We do not share your personal information with third parties except:
    • With your consent
    • To comply with legal obligations
    • To protect our rights and property
    • With service providers who assist in our operations
    • In connection with a business transaction`,
    expandable: true,
  },
  {
    id: "security",
    title: "Data Security",
    icon: <Lock className="w-6 h-6" />,
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.`,
  },
  {
    id: "rights",
    title: "Your Rights",
    icon: <UserCheck className="w-6 h-6" />,
    content: `You have the right to:
    • Access your personal information
    • Correct inaccurate information
    • Request deletion of your information
    • Object to processing of your information
    • Receive a copy of your information
    • Withdraw consent at any time`,
    expandable: true,
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    icon: <Shield className="w-6 h-6" />,
    content: `We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`,
  },
  {
    id: "updates",
    title: "Privacy Policy Updates",
    icon: <Bell className="w-6 h-6" />,
    content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: <HelpCircle className="w-6 h-6" />,
    content: `If you have any questions about this privacy policy or our treatment of your personal information, please contact our Data Protection Officer.`,
    link: "Hello@visionreimagine.com",
  },
];

export function Privacy() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <main className="flex-1 max-w-7xl mx-auto px-6 py-24">
      <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-br from-black to-black/60 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-base lg:text-xl text-black/60">
          Your privacy is important to us. Here's how we handle your data.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.id}
                className="border-b border-gray-100 last:border-0 pb-8 last:pb-0"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-black/5 text-black/60">
                    {section.icon}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-medium">{section.title}</h2>
                      {section.expandable && (
                        <Button
                          variant="ghost"
                          onClick={() => toggleSection(section.id)}
                          className="text-sm"
                        >
                          {expandedSections.includes(section.id)
                            ? "Show Less"
                            : "Read More"}
                        </Button>
                      )}
                    </div>
                    <div
                      className={`${
                        section.expandable &&
                        !expandedSections.includes(section.id)
                          ? "line-clamp-3"
                          : ""
                      } text-black/60 whitespace-pre-line`}
                    >
                      {section.content}
                    </div>
                    {section.link && (
                      <a
                        href={`mailto:${section.link}`}
                        className="text-blue-800 underline"
                      >
                        {section.link}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-black/60">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </main>
  );
}
