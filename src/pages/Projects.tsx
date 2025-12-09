import { MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
    const projects = [
        {
            title: "Coastal Mangrove Restoration",
            location: "Sundarbans, West Bengal",
            category: "Biodiversity Protection",
            image: "https://images.unsplash.com/photo-1572455044327-734fa01b637b", // Placeholder
            description: "Restored 50 hectares of degraded mangrove forest, enhancing coastal resilience and biodiversity."
        },
        {
            title: "Solar Park EIA",
            location: "Rajasthan, India",
            category: "Environmental Clearance",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276", // Placeholder
            description: "Conducted comprehensive Environmental Impact Assessment for a 500MW solar park project."
        },
        {
            title: "Urban Green Belt Development",
            location: "Hyderabad, Telangana",
            category: "Green CSR",
            image: "https://images.unsplash.com/photo-1496104679561-396512623b60", // Placeholder
            description: "Designed and implemented a community-led green belt project for a major IT park."
        },
        {
            title: "Biodiversity Action Plan",
            location: "Western Ghats, Karnataka",
            category: "Sustainability Consulting",
            image: "https://images.unsplash.com/photo-1440557653082-e8e186733eeb", // Placeholder
            description: "Developed a long-term biodiversity action plan for a mining company to minimize ecological footprint."
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-20">
            <div className="bg-secondary/30 py-20 mb-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Projects</h1>
                    <p className="text-xl text-primary/80 max-w-2xl">
                        A showcase of our commitment to the environment through impactful projects across the country.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden border-none shadow-lg group cursor-pointer">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-primary">
                                    {project.category}
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                <div className="flex items-center text-gray-500 mb-4">
                                    <MapPin size={18} className="mr-1" />
                                    {project.location}
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {project.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Locations Map Placeholder */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-primary mb-10">Project Footprint</h2>
                    <div className="bg-accent/10 rounded-3xl h-[400px] flex items-center justify-center border-2 border-dashed border-primary/20">
                        <p className="text-gray-500 text-lg">Interactive Project Map of India (Coming Soon)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
