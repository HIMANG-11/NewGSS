import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Globe, Mountain, Sprout, ArrowRight } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-accent/5">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff"
            alt="Nature background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[1px]" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className={`text-5xl md:text-7xl font-bold text-accent mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Green Support Services
          </h1>
          <p className={`text-xl md:text-2xl text-accent/90 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Expert consulting in environmental conservation, sustainability, and biodiversity studies.
          </p>
          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-8">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">Our Expertise</h2>
              <p className="text-gray-600 max-w-xl">Comprehensive solutions tailored to your environmental needs.</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex text-primary hover:text-primary/80 group">
              <Link to="/services">View All Services <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Leaf className="w-10 h-10" />, title: "Conservation Planning" },
              { icon: <Globe className="w-10 h-10" />, title: "Sustainability Consulting" },
              { icon: <Mountain className="w-10 h-10" />, title: "Biodiversity Studies" },
              { icon: <Sprout className="w-10 h-10" />, title: "Environmental Impact" },
            ].map((service, index) => (
              <Card key={index} className="p-6 bg-accent/5 border-none shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">Professional guidance and strategic implementation.</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild className="border-primary text-primary">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-primary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Building a Greener Future</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                At Green Support Services, we believe that development and conservation can coexist.
                Our team of experts works tirelessly to provide innovative solutions that protect our planet's biodiversity while enabling sustainable growth.
              </p>
              <Button size="lg" variant="secondary" asChild className="text-primary hover:text-primary/90">
                <Link to="/about">About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl transform rotate-3 scale-105" />
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                alt="Environmental Consulting"
                className="relative rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-12">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-xl h-64 shadow-md cursor-pointer">
                <img
                  src={`https://source.unsplash.com/random/800x600?nature,forest&sig=${item}`}
                  alt="Project"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">Project Name {item}</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Location, India</p>
                </div>
              </div>
            ))}
          </div>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to make a positive impact?</h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Contact us today to discuss how we can help you achieve your environmental goals.
              </p>
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6 text-primary hover:text-primary/90">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
