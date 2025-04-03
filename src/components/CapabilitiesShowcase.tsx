
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { useQuery } from '@tanstack/react-query';
import { 
  Download, Code, Paintbrush, Cpu, MoveHorizontal, Sparkles, BarChart3,
  Rotate3d, Globe, Lightbulb, Layers, MousePointerClick
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTheme } from '@/hooks/useTheme';

// Simulated data for demonstration
const fetchSkillsData = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 800));
  return [
    { name: 'React', value: 90 },
    { name: 'TypeScript', value: 85 },
    { name: 'Tailwind', value: 95 },
    { name: 'Framer', value: 80 },
    { name: 'ShadcnUI', value: 85 },
    { name: 'React Query', value: 75 }
  ];
};

const fetchProjectData = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { name: 'Jan', projects: 4, commits: 30 },
    { name: 'Feb', projects: 3, commits: 25 },
    { name: 'Mar', projects: 5, commits: 40 },
    { name: 'Apr', projects: 7, commits: 45 },
    { name: 'May', projects: 6, commits: 35 },
    { name: 'Jun', projects: 9, commits: 55 }
  ];
};

const CapabilityCard = ({ 
  title, 
  description, 
  icon: Icon, 
  children,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="w-full"
    >
      <Card className="border border-terminal-green/30 bg-black text-terminal-green h-full">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="bg-terminal-green/10 p-2 rounded-md">
            <Icon className="h-6 w-6 text-terminal-green" />
          </div>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="text-terminal-green/70">{description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  );
};

const FramerMotionShowcase = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Interactive Elements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-terminal-green/10 p-8 rounded-lg flex justify-center cursor-pointer"
          onClick={() => setCount(c => c + 1)}
        >
          <motion.div 
            animate={{ rotate: count * 360 }} 
            transition={{ duration: 0.5 }}
            className="text-terminal-green"
          >
            <Rotate3d size={36} />
            <p className="mt-3 text-center">Clicked {count} times</p>
          </motion.div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-terminal-green/10 p-8 rounded-lg relative overflow-hidden cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div 
            animate={{ y: isHovered ? -20 : 0, opacity: isHovered ? 0 : 1 }} 
            className="flex flex-col items-center"
          >
            <MousePointerClick size={36} />
            <p className="mt-3 text-center">Hover me</p>
          </motion.div>
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 60, opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sparkles size={36} />
            <p className="ml-2">Animation triggered!</p>
          </motion.div>
        </motion.div>
      </div>

      <h3 className="text-xl font-bold mt-8">Scroll Animations</h3>
      <div className="space-y-4 mt-4 h-60 overflow-y-auto p-4 border border-terminal-green/30 rounded-lg">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="p-4 bg-terminal-green/10 rounded-lg"
          >
            <div className="flex items-center space-x-2">
              <Code size={20} />
              <span>Scroll animation item #{i + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const RechartsShowcase = () => {
  const { data: skillsData } = useQuery({
    queryKey: ['skills'],
    queryFn: fetchSkillsData
  });
  
  const { data: projectData } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjectData
  });
  
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? '#00FF00' : '#00CC00';
  
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Skill Proficiency</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={skillsData || []}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 0, 0.1)" />
              <XAxis dataKey="name" stroke={textColor} />
              <YAxis stroke={textColor} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                  border: '1px solid #00FF00',
                  color: '#00FF00'
                }}
              />
              <Legend />
              <Bar dataKey="value" name="Proficiency" fill="#00FF00" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Project Activity</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={projectData || []}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 0, 0.1)" />
              <XAxis dataKey="name" stroke={textColor} />
              <YAxis stroke={textColor} />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                  border: '1px solid #00FF00',
                  color: '#00FF00'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="projects" 
                stackId="1"
                stroke="#00FF00" 
                fill="rgba(0, 255, 0, 0.3)" 
              />
              <Area 
                type="monotone" 
                dataKey="commits" 
                stackId="2"
                stroke="#00FFAA" 
                fill="rgba(0, 255, 170, 0.3)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const ShadcnUIShowcase = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="buttons" className="w-full">
        <TabsList className="w-full grid grid-cols-3 bg-terminal-green/10 text-terminal-green">
          <TabsTrigger value="buttons" className="data-[state=active]:bg-terminal-green data-[state=active]:text-black">Buttons</TabsTrigger>
          <TabsTrigger value="cards" className="data-[state=active]:bg-terminal-green data-[state=active]:text-black">Cards</TabsTrigger>
          <TabsTrigger value="typography" className="data-[state=active]:bg-terminal-green data-[state=active]:text-black">Typography</TabsTrigger>
        </TabsList>
        <TabsContent value="buttons" className="mt-4 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="default" className="bg-terminal-green text-black hover:bg-terminal-green/80">Default</Button>
            <Button variant="outline" className="border-terminal-green text-terminal-green hover:bg-terminal-green/10">Outline</Button>
            <Button variant="ghost" className="text-terminal-green hover:bg-terminal-green/10">Ghost</Button>
            <Button variant="link" className="text-terminal-green">Link</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Button size="sm" className="bg-terminal-green text-black">Small</Button>
            <Button size="default" className="bg-terminal-green text-black">Default</Button>
            <Button size="lg" className="bg-terminal-green text-black">Large</Button>
          </div>
        </TabsContent>
        <TabsContent value="cards" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-terminal-green/30 bg-black">
              <CardHeader>
                <CardTitle className="text-terminal-green">Analytics</CardTitle>
                <CardDescription className="text-terminal-green/70">
                  View your project statistics
                </CardDescription>
              </CardHeader>
              <CardContent className="text-terminal-green/80">
                <p>Track performance metrics and development progress</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="border-terminal-green text-terminal-green hover:bg-terminal-green/10">Cancel</Button>
                <Button className="bg-terminal-green text-black hover:bg-terminal-green/80">View</Button>
              </CardFooter>
            </Card>
            <Card className="border-terminal-green/30 bg-black">
              <CardHeader>
                <CardTitle className="text-terminal-green">Projects</CardTitle>
                <CardDescription className="text-terminal-green/70">
                  Manage your current projects
                </CardDescription>
              </CardHeader>
              <CardContent className="text-terminal-green/80">
                <p>Access all your development projects and repositories</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="border-terminal-green text-terminal-green hover:bg-terminal-green/10">Cancel</Button>
                <Button className="bg-terminal-green text-black hover:bg-terminal-green/80">Explore</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="typography" className="mt-4 space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-terminal-green">Heading 1</h1>
            <h2 className="text-2xl font-bold text-terminal-green">Heading 2</h2>
            <h3 className="text-xl font-bold text-terminal-green">Heading 3</h3>
            <h4 className="text-lg font-bold text-terminal-green">Heading 4</h4>
            <p className="text-base text-terminal-green/80">Regular paragraph text with <span className="text-terminal-green font-bold">bold highlights</span> and <span className="underline">underlined content</span>.</p>
            <p className="text-sm text-terminal-green/70">Smaller text for captions and secondary information.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const CapabilitiesShowcase = () => {
  return (
    <div className="py-10">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold mb-10 text-center text-terminal-green"
      >
        Capability Showcase
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <CapabilityCard 
          title="Framer Motion" 
          description="Advanced animations and interactions"
          icon={MoveHorizontal}
          delay={0.1}
        >
          <FramerMotionShowcase />
        </CapabilityCard>
        
        <CapabilityCard 
          title="Recharts" 
          description="Data visualization with React Query integration"
          icon={BarChart3}
          delay={0.2}
        >
          <RechartsShowcase />
        </CapabilityCard>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mb-6">
        <CapabilityCard 
          title="Shadcn UI" 
          description="Beautiful, customizable component library"
          icon={Layers}
          delay={0.3}
        >
          <ShadcnUIShowcase />
        </CapabilityCard>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CapabilityCard 
          title="Lucide Icons" 
          description="Clean and consistent SVG icons"
          icon={Paintbrush}
          delay={0.4}
        >
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {[Download, Code, Cpu, Globe, Lightbulb, Sparkles].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center p-3 bg-terminal-green/10 rounded-lg cursor-pointer"
              >
                <Icon className="h-8 w-8" />
              </motion.div>
            ))}
          </div>
        </CapabilityCard>
        
        <CapabilityCard 
          title="React Router" 
          description="Client-side navigation"
          icon={Globe}
          delay={0.5}
        >
          <div className="space-y-3">
            <p className="mb-2">Navigate between pages:</p>
            <div className="grid grid-cols-1 gap-2">
              {['Home', 'Projects', 'About', 'Contact'].map((page) => (
                <motion.div
                  key={page}
                  whileHover={{ x: 5 }}
                  className="flex items-center p-2 bg-terminal-green/10 rounded-lg cursor-pointer"
                >
                  <span>→ {page}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </CapabilityCard>
        
        <CapabilityCard 
          title="React Query" 
          description="Data fetching and state management"
          icon={Cpu}
          delay={0.6}
        >
          <div className="space-y-3">
            <p>Features:</p>
            <ul className="space-y-2">
              {[
                'Caching and automatic refetching',
                'Loading & error states',
                'Pagination and infinite queries',
                'Mutation and optimistic updates',
                'Background fetching'
              ].map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.6 }}
                  className="flex items-center p-2 bg-terminal-green/10 rounded-lg"
                >
                  <span className="ml-2">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </CapabilityCard>
      </div>
    </div>
  );
};

export default CapabilitiesShowcase;
