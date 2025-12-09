import { Leaf, Globe, Mountain, Sprout, ShieldCheck, Sun } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
    const services = [
        {
            icon: <Mountain className="w-12 h-12 text-primary" />,
            title: "Biodiversity Protection",
            description: "Comprehensive biodiversity impact assessments and conservation planning to protect local ecosystems while enabling sustainable development.",
            details: ["Flora & Fauna Surveys", "Habitat Management Plans", "Conservation Strategies"]
        },
        {
            icon: <ShieldCheck className="w-12 h-12 text-primary" />,
            title: "Environmental Clearances",
            description: "Expert guidance through regulatory landscapes to obtain necessary environmental clearances for your projects efficiently.",
            details: ["EIA Studies", "Compliance Audits", "Regulatory Liaison"]
        },
        {
            icon: <Globe className="w-12 h-12 text-primary" />,
            title: "Sustainability Consulting",
            description: " Strategic consulting to integrate sustainability into your core business operations, reducing footprint and enhancing brand value.",
            details: ["ESG Reporting", "Carbon Footprint Analysis", "Sustainability Roadmaps"]
        },
        {
            icon: <Leaf className="w-12 h-12 text-primary" />,
            title: "Green CSR",
            description: "Designing and implementing impactful Corporate Social Responsibility initiatives focused on environmental stewardship.",
            details: ["Community Greening", "Watershed Management", "Eco-education Programs"]
        },
        {
            icon: <Sun className="w-12 h-12 text-primary" />,
            title: "Renewable Energy",
            description: "Support for renewable energy projects, from site selection to environmental impact assessment and mitigation.",
            details: ["Solar/Wind Feasibility", "grid Integration Studies", "Environmental Monitoring"]
        },
        {
            icon: <Sprout className="w-12 h-12 text-primary" />,
            title: "Ecological Restoration",
            description: "Science-based restoration of degraded landscapes to recover biodiversity and ecosystem services.",
            details: ["Reforestation", "Wetland Restoration", "Soil Rehabilitation"]
        }
    ];

    return (
        <div className="bg-accent/10 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="bg-primary text-secondary-foreground py-20 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
                    <p className="text-xl max-w-2xl mx-auto text-white/90">
                        Holistic environmental solutions tailored for a sustainable future.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-none shadow-md">
                            <CardHeader>
                                <div className="mb-4">{service.icon}</div>
                                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                                <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {service.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
