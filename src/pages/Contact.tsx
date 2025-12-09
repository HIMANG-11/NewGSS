import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. We will get back to you shortly.",
        });
    };

    return (
        <div className="min-h-screen bg-accent/5">
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Let's Discuss Your Project</h1>
                            <p className="text-lg text-gray-600">
                                Whether you need a biodiversity assessment, environmental clearance, or sustainability strategy, we are here to help.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Phone className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">Call Us</h3>
                                    <p className="text-gray-600">+91 123 456 7890</p>
                                    <p className="text-sm text-gray-400">Mon-Fri, 9am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Mail className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">Email Us</h3>
                                    <p className="text-gray-600">contact@greensupport.com</p>
                                    <p className="text-gray-600">info@greensupport.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <MapPin className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">Visit Us</h3>
                                    <p className="text-gray-600">
                                        123 Green Earth Avenue,<br />
                                        Eco City, India 110001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <Input placeholder="John" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <Input placeholder="Doe" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email</label>
                                <Input type="email" placeholder="john@example.com" required />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Subject</label>
                                <Input placeholder="Project Inquiry" required />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <Textarea placeholder="Tell us about your project..." className="min-h-[150px]" required />
                            </div>

                            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                                <Send className="w-4 h-4 mr-2" /> Send Message
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
