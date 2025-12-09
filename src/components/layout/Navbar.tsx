import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-primary/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/logo.png" alt="GSS Logo" className="h-12 w-auto object-contain" />
                        <span className="text-xl font-bold text-primary hidden md:block">Green Support Services</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-gray-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                            Get Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-600 hover:text-primary transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-sm absolute left-0 right-0 shadow-lg">
                        <div className="flex flex-col space-y-4 px-4">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-base font-medium transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-gray-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col space-y-3 border-t border-gray-100">
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <Phone size={16} />
                                    <span className="text-sm">+91 123 456 7890</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <Mail size={16} />
                                    <span className="text-sm">info@greensupport.com</span>
                                </div>
                                <Button className="w-full bg-primary hover:bg-primary/90">
                                    Get Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
