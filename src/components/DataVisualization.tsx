
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { 
  AreaChart, Area, BarChart, Bar, LineChart, Line, 
  PieChart, Pie, Cell, RadarChart, PolarGrid, 
  PolarAngleAxis, Radar, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  BarChart3, PieChart as PieChartIcon, LineChart as LineChartIcon, 
  AreaChart as AreaChartIcon, Radar as RadarIcon, Loader2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Mock data fetching functions
const fetchBarData = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
    { name: 'Jul', value: 700 },
    { name: 'Aug', value: 850 },
  ];
};

const fetchLineData = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { name: 'Jan', React: 4000, Vue: 2400, Angular: 2400 },
    { name: 'Feb', React: 3000, Vue: 1398, Angular: 2210 },
    { name: 'Mar', React: 2000, Vue: 9800, Angular: 2290 },
    { name: 'Apr', React: 2780, Vue: 3908, Angular: 2000 },
    { name: 'May', React: 1890, Vue: 4800, Angular: 2181 },
    { name: 'Jun', React: 2390, Vue: 3800, Angular: 2500 },
    { name: 'Jul', React: 3490, Vue: 4300, Angular: 2100 },
  ];
};

const fetchAreaData = async () => {
  await new Promise(resolve => setTimeout(resolve, 1200));
  return [
    { name: '2018', mobile: 300, desktop: 400, tablet: 200 },
    { name: '2019', mobile: 450, desktop: 300, tablet: 250 },
    { name: '2020', mobile: 600, desktop: 200, tablet: 300 },
    { name: '2021', mobile: 750, desktop: 250, tablet: 350 },
    { name: '2022', mobile: 800, desktop: 300, tablet: 400 },
    { name: '2023', mobile: 950, desktop: 200, tablet: 450 },
  ];
};

const fetchPieData = async () => {
  await new Promise(resolve => setTimeout(resolve, 900));
  return [
    { name: 'React', value: 400 },
    { name: 'Vue', value: 300 },
    { name: 'Angular', value: 300 },
    { name: 'Svelte', value: 200 },
    { name: 'Other', value: 100 },
  ];
};

const fetchRadarData = async () => {
  await new Promise(resolve => setTimeout(resolve, 1100));
  return [
    { subject: 'React', A: 120, B: 110, fullMark: 150 },
    { subject: 'Node.js', A: 98, B: 130, fullMark: 150 },
    { subject: 'TypeScript', A: 86, B: 130, fullMark: 150 },
    { subject: 'Next.js', A: 99, B: 100, fullMark: 150 },
    { subject: 'GraphQL', A: 85, B: 90, fullMark: 150 },
    { subject: 'CSS', A: 65, B: 85, fullMark: 150 },
  ];
};

// Color palette for charts
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe'];

const DataVisualization = () => {
  const [chartType, setChartType] = useState('bar');
  
  const { 
    data: barData, 
    isLoading: isLoadingBar 
  } = useQuery({ 
    queryKey: ['barData'], 
    queryFn: fetchBarData 
  });

  const { 
    data: lineData, 
    isLoading: isLoadingLine 
  } = useQuery({ 
    queryKey: ['lineData'], 
    queryFn: fetchLineData 
  });

  const { 
    data: areaData, 
    isLoading: isLoadingArea 
  } = useQuery({ 
    queryKey: ['areaData'], 
    queryFn: fetchAreaData 
  });

  const { 
    data: pieData, 
    isLoading: isLoadingPie 
  } = useQuery({ 
    queryKey: ['pieData'], 
    queryFn: fetchPieData 
  });

  const { 
    data: radarData, 
    isLoading: isLoadingRadar 
  } = useQuery({ 
    queryKey: ['radarData'], 
    queryFn: fetchRadarData 
  });

  const isLoading = isLoadingBar || isLoadingLine || isLoadingArea || isLoadingPie || isLoadingRadar;

  const chartOptions = [
    { type: 'bar', label: 'Bar Chart', icon: <BarChart3 className="h-5 w-5" /> },
    { type: 'line', label: 'Line Chart', icon: <LineChartIcon className="h-5 w-5" /> },
    { type: 'area', label: 'Area Chart', icon: <AreaChartIcon className="h-5 w-5" /> },
    { type: 'pie', label: 'Pie Chart', icon: <PieChartIcon className="h-5 w-5" /> },
    { type: 'radar', label: 'Radar Chart', icon: <RadarIcon className="h-5 w-5" /> },
  ];

  const renderChart = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-96">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <span className="ml-2">Loading data...</span>
        </div>
      );
    }

    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={barData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))', 
                  borderColor: 'hsl(var(--border))' 
                }} 
              />
              <Legend />
              <Bar dataKey="value" fill="hsl(var(--primary))" animationDuration={1500} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={lineData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))', 
                  borderColor: 'hsl(var(--border))' 
                }} 
              />
              <Legend />
              <Line type="monotone" dataKey="React" stroke="#8884d8" activeDot={{ r: 8 }} animationDuration={1500} />
              <Line type="monotone" dataKey="Vue" stroke="#82ca9d" activeDot={{ r: 8 }} animationDuration={1500} />
              <Line type="monotone" dataKey="Angular" stroke="#ffc658" activeDot={{ r: 8 }} animationDuration={1500} />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={areaData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))', 
                  borderColor: 'hsl(var(--border))' 
                }} 
              />
              <Legend />
              <Area type="monotone" dataKey="mobile" stackId="1" stroke="#8884d8" fill="#8884d8" animationDuration={1500} />
              <Area type="monotone" dataKey="desktop" stackId="1" stroke="#82ca9d" fill="#82ca9d" animationDuration={1500} />
              <Area type="monotone" dataKey="tablet" stackId="1" stroke="#ffc658" fill="#ffc658" animationDuration={1500} />
            </AreaChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                animationDuration={1500}
              >
                {pieData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))', 
                  borderColor: 'hsl(var(--border))' 
                }} 
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      
      case 'radar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))', 
                  borderColor: 'hsl(var(--border))' 
                }} 
              />
              <Radar name="Team A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} animationDuration={1500} />
              <Radar name="Team B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} animationDuration={1500} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Data <span className="text-gradient">Visualization</span>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Explore dynamic data visualization with Recharts and React Query
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="bg-background-light border border-border/50 shadow-xl">
            <CardHeader className="pb-0">
              <CardTitle>Interactive Chart Demo</CardTitle>
              <CardDescription>
                Select a chart type below to see different visualizations
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2 mb-6">
                {chartOptions.map((option) => (
                  <Button
                    key={option.type}
                    variant={chartType === option.type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setChartType(option.type)}
                    className="flex items-center gap-2"
                  >
                    {option.icon}
                    {option.label}
                  </Button>
                ))}
              </div>

              <div className="bg-background p-4 rounded-lg border border-border/20">
                {renderChart()}
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-text-secondary">
                Data is fetched using React Query with simulated API delays
              </p>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card className="bg-background-light border border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">React Query Integration</CardTitle>
              <CardDescription>
                Data fetching with caching and state management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Automatic loading states for smooth UI transitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Built-in caching for performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Efficient data refetching strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Background data updates with stale-while-revalidate</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-background-light border border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Recharts Features</CardTitle>
              <CardDescription>
                Composable chart components for React
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Responsive layouts with ResposiveContainer</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Seamless integration with React's component model</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Customizable animations and transitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Theme-aware styling with dynamic colors</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default DataVisualization;
