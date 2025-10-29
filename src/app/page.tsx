"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BarChart, Briefcase, HelpCircle, MessageSquare, Rocket, Sparkles, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Services", id: "feature" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="DialedWeb"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Amplify Your Brand's Digital Presence"
          description="Strategic marketing solutions that drive growth, boost engagement, and convert prospects into loyal customers. Let's take your business to the next level."
          tag="Marketing Agency"
          tagIcon={Zap}
          buttons={[
            { text: "Start Your Campaign", href: "contact" },
            { text: "View Our Work", href: "feature" }
          ]}
          imageSrc="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Marketing team collaborating"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose DialedWeb"
          description="We're not just another marketing agency. We're your strategic partner committed to delivering measurable results and exceptional ROI."
          tag="Our Approach"
          tagIcon={Target}
          bulletPoints={[
            {
              title: "Data-Driven Strategy",
              description: "Every campaign is built on comprehensive market research and analytics",
              icon: BarChart
            },
            {
              title: "Creative Excellence",
              description: "Award-winning creative that captures attention and drives action",
              icon: Sparkles
            },
            {
              title: "ROI Focused",
              description: "Transparent reporting and optimization for maximum return on investment",
              icon: TrendingUp
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Marketing strategy session"
          imagePosition="left"
          buttons={[
            { text: "Learn More", href: "team" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Comprehensive Marketing Services"
          description="From strategy to execution, we offer full-spectrum marketing solutions tailored to your business goals."
          tag="Services"
          tagIcon={Briefcase}
          features={[
            {
              title: "Digital Strategy",
              description: "Comprehensive digital marketing strategies that align with your business objectives and drive measurable growth.",
              imageSrc: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Digital marketing strategy"
            },
            {
              title: "Social Media Marketing",
              description: "Engaging social media campaigns that build community, increase brand awareness, and drive conversions.",
              imageSrc: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Social media marketing"
            },
            {
              title: "Analytics & Reporting",
              description: "Advanced analytics and detailed reporting to track performance and optimize your marketing investments.",
              imageSrc: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marketing analytics"
            },
            {
              title: "Brand Development",
              description: "Complete brand identity development including logo design, brand guidelines, and visual assets.",
              imageSrc: "https://images.pexels.com/photos/7661410/pexels-photo-7661410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Brand development"
            }
          ]}
          buttons={[
            { text: "View All Services", href: "contact" }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Don't just take our word for it. See what our clients have achieved with our marketing expertise."
          tag="Testimonials"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechFlow Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Marketing Director",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Founder",
              company: "GrowthCo",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Brand Manager",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5990046/pexels-photo-5990046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "VP Marketing",
              company: "ScaleUp Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Thompson portrait"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Team"
          description="Experienced marketing professionals dedicated to your success"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alex Rivera",
              role: "Creative Director",
              imageSrc: "https://images.pexels.com/photos/8000609/pexels-photo-8000609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Rivera portrait"
            },
            {
              id: "2",
              name: "Jordan Smith",
              role: "Strategy Lead",
              imageSrc: "https://images.pexels.com/photos/5990269/pexels-photo-5990269.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jordan Smith portrait"
            },
            {
              id: "3",
              name: "Taylor Kim",
              role: "Digital Specialist",
              imageSrc: "https://images.pexels.com/photos/34440783/pexels-photo-34440783.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Taylor Kim portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of successful businesses that trust DialedWeb for their marketing needs"
          tag="Clients"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1032109/pexels-photo-1032109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/16029605/pexels-photo-16029605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/19795702/pexels-photo-19795702.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about our marketing services and process"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How long does it take to see results?",
              content: "Most clients start seeing initial results within 4-6 weeks, with significant growth typically occurring within 3-6 months depending on the campaign scope and industry."
            },
            {
              id: "2",
              title: "What makes DialedWeb different?",
              content: "We combine data-driven strategy with creative excellence, providing transparent reporting and personalized service that treats your business goals as our own."
            },
            {
              id: "3",
              title: "Do you work with small businesses?",
              content: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies, tailoring our approach to fit your budget and goals."
            },
            {
              id: "4",
              title: "What's included in your reporting?",
              content: "We provide comprehensive monthly reports including campaign performance, ROI analysis, audience insights, and strategic recommendations for optimization."
            },
            {
              id: "5",
              title: "Can you help with brand development?",
              content: "Yes, we offer complete brand development services including logo design, brand guidelines, visual identity, and brand positioning strategy."
            },
            {
              id: "6",
              title: "How do you measure success?",
              content: "Success is measured through KPIs aligned with your business objectives, including conversion rates, ROI, engagement metrics, and revenue growth."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Grow Your Business?"
          description="Let's discuss your marketing goals and create a strategy that delivers real results. Get your free consultation today."
          tagIcon={Rocket}
          inputPlaceholder="Enter your email"
          buttonText="Get Free Consultation"
          termsText="By submitting, you agree to receive marketing communications from DialedWeb. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                { label: "Digital Strategy", href: "feature" },
                { label: "Social Media", href: "feature" },
                { label: "Brand Development", href: "feature" },
                { label: "Analytics", href: "feature" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Careers", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Case Studies", href: "testimonial" },
                { label: "Blog", href: "feature" },
                { label: "Free Consultation", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | DialedWeb Marketing Agency"
        />
      </div>
    </ThemeProvider>
  );
}