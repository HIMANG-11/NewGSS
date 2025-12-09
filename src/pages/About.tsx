import { Users, Award, Target } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="py-20 bg-primary text-secondary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Green Support Services</h1>
                    <p className="text-xl max-w-3xl mx-auto text-white/90">
                        We are a team of passionate environmentalists, scientists, and engineers dedicated to balancing development with conservation.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-accent/5 rounded-2xl">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                            <p className="text-gray-600">
                                To provide top-tier environmental consulting that empowers businesses to thrive sustainably.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-accent/5 rounded-2xl">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Who We Are</h3>
                            <p className="text-gray-600">
                                A multidisciplinary team of experts in ecology, engineering, and policy working towards a common goal.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-accent/5 rounded-2xl">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Values</h3>
                            <p className="text-gray-600">
                                Integrity, Innovation, and impactful environmental stewardship are the core of everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-secondary/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-primary">Meet Our Experts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((member) => (
                            <div key={member} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-64 bg-gray-200 w-full object-cover">
                                    <img src={`https://i.pravatar.cc/300?img=${member + 10}`} alt="Team Member" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800">Dr. Name Surname</h3>
                                    <p className="text-primary font-medium text-sm mb-2">Senior Ecologist</p>
                                    <p className="text-gray-500 text-sm">
                                        Ph.D. in Environmental Science with 10+ years of field experience.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
