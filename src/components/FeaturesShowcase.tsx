
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Palette, Wand2, Box, Sparkles, LayoutGrid } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: "Shadcn UI",
    icon: <Layers className="h-10 w-10 text-primary" />,
    description: "Beautiful, accessible components that are easy to implement and customize."
  },
  {
    title: "Framer Motion",
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    description: "Production-ready animations for React, with simple declarative syntax."
  },
  {
    title: "Tailwind CSS",
    icon: <Palette className="h-10 w-10 text-primary" />,
    description: "Utility-first CSS framework for rapidly building custom user interfaces."
  },
  {
    title: "React Query",
    icon: <Box className="h-10 w-10 text-primary" />,
    description: "Powerful data fetching, caching, and state management for React applications."
  },
  {
    title: "Lucide Icons",
    icon: <LayoutGrid className="h-10 w-10 text-primary" />,
    description: "Beautiful & consistent icons for your web applications."
  },
  {
    title: "TypeScript",
    icon: <Wand2 className="h-10 w-10 text-primary" />,
    description: "Static typing for JavaScript for better developer experience."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const FeaturesShowcase = () => {
  return (
    <section className="section bg-background-light py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Powerful</span> Features
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              Explore the wide range of features and libraries that make this portfolio showcase a modern development powerhouse.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="h-full bg-background border border-border/50 shadow-lg hover:shadow-xl transition-all hover:border-primary/50 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-text-secondary">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              UI Component <span className="text-gradient">Showcase</span>
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              Explore the components from Shadcn UI library with beautiful styling and functionality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue="buttons" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="buttons">Buttons</TabsTrigger>
                <TabsTrigger value="accordion">Accordion</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
              </TabsList>
              <TabsContent value="buttons" className="p-6 border rounded-lg mt-4 bg-background">
                <h3 className="text-xl font-semibold mb-6">Button Variants</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button disabled>Disabled</Button>
                  <Button variant="default" size="sm">Small</Button>
                </div>
              </TabsContent>
              <TabsContent value="accordion" className="p-6 border rounded-lg mt-4 bg-background">
                <h3 className="text-xl font-semibold mb-6">Accordion Component</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Why use Shadcn UI?</AccordionTrigger>
                    <AccordionContent>
                      Shadcn UI provides beautifully designed, accessible components that you can copy and paste into your apps. They're built on top of Radix UI primitives and styled with Tailwind CSS.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How to customize components?</AccordionTrigger>
                    <AccordionContent>
                      Every component can be easily customized by modifying the CSS variables and Tailwind classes. The component code is yours, so you're free to modify it as needed.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it compatible with modern frameworks?</AccordionTrigger>
                    <AccordionContent>
                      Yes! Shadcn UI works with React, Next.js, and other modern frameworks. The components are framework-agnostic and can be adapted to work with any React-based project.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              <TabsContent value="cards" className="p-6 border rounded-lg mt-4 bg-background">
                <h3 className="text-xl font-semibold mb-6">Card Variants</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Card</CardTitle>
                      <CardDescription>A simple card component</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>This is a basic card with a header, content, and footer.</p>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm">Action</Button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-primary/10 border-primary/50">
                    <CardHeader>
                      <CardTitle>Styled Card</CardTitle>
                      <CardDescription>Custom styled variant</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>This card has custom background and border styling.</p>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" variant="outline">Action</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
