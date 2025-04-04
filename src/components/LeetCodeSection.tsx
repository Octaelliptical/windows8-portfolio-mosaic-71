
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const LeetCodeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // LeetCode data (could be fetched from an API in a more advanced implementation)
  const leetCodeStats = {
    username: "Octa_elliptical",
    profileUrl: "https://leetcode.com/u/Octa_elliptical/",
    totalSolved: 78,
    totalQuestions: 2950,
    easySolved: 40,
    easyTotal: 775,
    mediumSolved: 32,
    mediumTotal: 1546,
    hardSolved: 6,
    hardTotal: 629,
    ranking: 784325,
    contestRating: 1415,
    contestParticipated: 8,
    badges: 3,
  };

  return (
    <section id="leetcode" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center mb-12"
            variants={itemVariants}
          >
            <Code2 size={36} className="text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">LeetCode Stats</h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold flex items-center">
                  <BrainCircuit className="mr-2" size={24} />
                  <a 
                    href={leetCodeStats.profileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {leetCodeStats.username}
                  </a>
                </CardTitle>
                <div className="flex items-center">
                  <Trophy className="text-yellow-500 mr-2" size={20} />
                  <span className="text-sm text-muted-foreground">Ranking: {leetCodeStats.ranking}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Solved Problems</h3>
                    <div className="overflow-hidden bg-background/50 rounded-lg">
                      <div className="relative h-10 w-full">
                        <div className="absolute inset-0 flex items-center">
                          <div className="h-2 w-full bg-muted rounded-full">
                            <div 
                              className="h-full bg-primary rounded-full" 
                              style={{ width: `${(leetCodeStats.totalSolved / leetCodeStats.totalQuestions) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-medium">
                            {leetCodeStats.totalSolved} / {leetCodeStats.totalQuestions}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <Table className="mt-4">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Difficulty</TableHead>
                          <TableHead>Solved</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead>Percentage</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium text-green-500">Easy</TableCell>
                          <TableCell>{leetCodeStats.easySolved}</TableCell>
                          <TableCell>{leetCodeStats.easyTotal}</TableCell>
                          <TableCell>{((leetCodeStats.easySolved / leetCodeStats.easyTotal) * 100).toFixed(1)}%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-yellow-500">Medium</TableCell>
                          <TableCell>{leetCodeStats.mediumSolved}</TableCell>
                          <TableCell>{leetCodeStats.mediumTotal}</TableCell>
                          <TableCell>{((leetCodeStats.mediumSolved / leetCodeStats.mediumTotal) * 100).toFixed(1)}%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-red-500">Hard</TableCell>
                          <TableCell>{leetCodeStats.hardSolved}</TableCell>
                          <TableCell>{leetCodeStats.hardTotal}</TableCell>
                          <TableCell>{((leetCodeStats.hardSolved / leetCodeStats.hardTotal) * 100).toFixed(1)}%</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Contest Performance</h3>
                    <div className="p-4 bg-background/50 rounded-lg">
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rating:</span>
                          <span className="font-medium">{leetCodeStats.contestRating}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Contests Participated:</span>
                          <span className="font-medium">{leetCodeStats.contestParticipated}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Badges Earned:</span>
                          <span className="font-medium">{leetCodeStats.badges}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-background/50 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Problem Distribution</h3>
                      <div className="flex h-8 overflow-hidden rounded">
                        <div 
                          className="bg-green-500 h-full" 
                          style={{ width: `${(leetCodeStats.easySolved / leetCodeStats.totalSolved) * 100}%` }}
                          title={`Easy: ${leetCodeStats.easySolved}`}
                        ></div>
                        <div 
                          className="bg-yellow-500 h-full" 
                          style={{ width: `${(leetCodeStats.mediumSolved / leetCodeStats.totalSolved) * 100}%` }}
                          title={`Medium: ${leetCodeStats.mediumSolved}`}
                        ></div>
                        <div 
                          className="bg-red-500 h-full" 
                          style={{ width: `${(leetCodeStats.hardSolved / leetCodeStats.totalSolved) * 100}%` }}
                          title={`Hard: ${leetCodeStats.hardSolved}`}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span className="text-green-500">Easy: {leetCodeStats.easySolved}</span>
                        <span className="text-yellow-500">Medium: {leetCodeStats.mediumSolved}</span>
                        <span className="text-red-500">Hard: {leetCodeStats.hardSolved}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
