import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-secondary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <img src="/logo.png" alt="GSS Logo" className="h-10 w-auto bg-white rounded-full p-1" />
                            <span className="text-xl font-bold text-white">Green Support Services</span>
                        </div>
                        <p className="text-white/80 mb-6">
                            Empowering businesses with sustainable solutions for a greener future. Expert consulting in biodiversity, environmental clearance, and renewable energy.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="text-white/70 hover:text-white transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Services', path: '/services' },
                                { name: 'Projects', path: '/projects' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-white/70 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {[
                                'Biodiversity Protection',
                                'Environmental Clearances',
                                'Sustainability Consulting',
                                'Green CSR',
                                'Renewable Energy',
                            ].map((service) => (
                                <li key={service} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-white/70">
                                <MapPin className="shrink-0 mt-1" size={18} />
                                <span>123 Green Earth Avenue, Eco City, India 110001</span>
                            </li>
                            <li className="flex items-center space-x-3 text-white/70">
                                <Phone size={18} />
                                <span>+91 123 456 7890</span>
                            </li>
                            <li className="flex items-center space-x-3 text-white/70">
                                <Mail size={18} />
                                <span>contact@greensupport.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
                    <p>&copy; {new Date().getFullYear()} Green Support Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
