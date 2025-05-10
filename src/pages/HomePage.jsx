
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Star, Send, Shield, Award, Clock } from 'lucide-react';

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const reviews = [
    { id: 1, name: "John Smith", role: "Executive Chef", rating: 5, text: "The quality of ingredients from FIRE is unmatched. Their service has transformed our kitchen operations." },
    { id: 2, name: "Sarah Chen", role: "Restaurant Owner", rating: 5, text: "Exceptional quality and reliability. FIRE has been instrumental in our restaurant's success." },
    { id: 3, name: "Michael Brown", role: "Bakery Manager", rating: 5, text: "The best wholesale supplier we've worked with. Their prices and quality are unbeatable." }
  ];

  return (
    <div className="space-y-24 pb-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[90vh] flex items-center justify-center text-center"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img  className="w-full h-full object-cover opacity-20" alt="Professional kitchen environment" src="https://images.unsplash.com/photo-1587480424274-e38568068434" />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <motion.h1 
            {...fadeIn}
            className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--fire-primary))] to-[hsl(var(--fire-secondary))]"
          >
            Premium Food Ingredients at Wholesale Prices
          </motion.h1>
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[hsl(var(--fire-foreground))] mb-12 max-w-3xl mx-auto"
          >
            Elevate your culinary creations with our premium ingredients. We guarantee the best prices and highest quality in the industry.
          </motion.p>
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="text-lg bg-[hsl(var(--fire-primary))] hover:bg-[hsl(var(--fire-primary)_/_0.9)]">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg border-[hsl(var(--fire-primary))] text-[hsl(var(--fire-primary))]">
              <Link to="/signup">Join Now</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        className="container mx-auto px-4"
      >
        <h2 className="text-center mb-16">Our Mission</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="card-hover bg-[hsl(var(--muted))]">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 mb-4 mx-auto text-[hsl(var(--fire-primary))]" />
              <h3 className="mb-4">Quality Guarantee</h3>
              <p>Only the finest ingredients sourced from trusted suppliers worldwide.</p>
            </CardContent>
          </Card>
          <Card className="card-hover bg-[hsl(var(--muted))]">
            <CardContent className="p-6 text-center">
              <Clock className="w-12 h-12 mb-4 mx-auto text-[hsl(var(--fire-primary))]" />
              <h3 className="mb-4">Fast Delivery</h3>
              <p>Next-day delivery available for all orders placed before 2 PM.</p>
            </CardContent>
          </Card>
          <Card className="card-hover bg-[hsl(var(--muted))]">
            <CardContent className="p-6 text-center">
              <Award className="w-12 h-12 mb-4 mx-auto text-[hsl(var(--fire-primary))]" />
              <h3 className="mb-4">Best Price</h3>
              <p>We guarantee to beat any competitor's price by 10%.</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Money Back Guarantee */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="mb-8">Money Back Guarantee</h2>
        <p className="text-xl max-w-3xl mx-auto mb-12">
          We stand behind every product we sell. If you're not completely satisfied with your purchase, 
          we'll refund your money - no questions asked. That's our promise to you.
        </p>
        <Card className="card-hover bg-[hsl(var(--muted))] max-w-2xl mx-auto">
          <CardContent className="p-8">
            <Shield className="w-16 h-16 mb-6 mx-auto text-[hsl(var(--fire-primary))]" />
            <h3 className="mb-4">100% Satisfaction Guaranteed</h3>
            <p className="text-lg">
              Try our products risk-free. If you're not completely satisfied, return them within 30 days for a full refund.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Customer Reviews */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        className="container mx-auto px-4"
      >
        <h2 className="text-center mb-16">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover bg-[hsl(var(--muted))]">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[hsl(var(--fire-primary))] fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-[hsl(var(--fire-primary))]">{review.name}</p>
                    <p className="text-sm text-[hsl(var(--fire-secondary))]">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        className="container mx-auto px-4"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center mb-8">Contact Us</h2>
          <Card className="card-hover bg-[hsl(var(--muted))]">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Email" 
                    type="email" 
                    className="bg-[hsl(var(--background))] border-[hsl(var(--fire-primary))]" 
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    className="w-full min-h-[150px] rounded-md p-3 bg-[hsl(var(--background))] border border-[hsl(var(--fire-primary))] text-[hsl(var(--fire-foreground))]"
                  />
                </div>
                <Button className="w-full bg-[hsl(var(--fire-primary))]">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Location Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        className="container mx-auto px-4 text-center"
      >
        <Button size="lg" className="bg-[hsl(var(--fire-primary))]">
          <MapPin className="w-5 h-5 mr-2" /> Find Us
        </Button>
      </motion.section>
    </div>
  );
};

export default HomePage;
