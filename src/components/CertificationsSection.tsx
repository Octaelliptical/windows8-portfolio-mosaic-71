
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const CertificationsSection = () => {
  const certifications = [
    { id: 1, provider: "Udemy", name: "The Complete Web Development Boot-camp", year: "2024", link: "#" },
    { id: 2, provider: "Meta", name: "Introduction to Front-End | Introduction to Back-end | Version Control", year: "2023", link: "#" },
    { id: 3, provider: "U-M", name: "Python for Everybody Specialization", year: "2023", link: "#" },
    { id: 4, provider: "IBM", name: "AI Developer", year: "2023", link: "#" },
    { id: 5, provider: "Cisco", name: "Cybersecurity Essentials", year: "2023", link: "#" },
    { id: 6, provider: "Coding Ninjas", name: "Basics of C++ | Data Structures in C++", year: "2022", link: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="certifications" className="py-20 bg-muted/30">
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
            <Award size={36} className="text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg border border-border/50 overflow-hidden"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Provider</TableHead>
                  <TableHead>Certification</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead className="text-right">View</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certifications.map((cert) => (
                  <TableRow key={cert.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{cert.provider}</TableCell>
                    <TableCell>{cert.name}</TableCell>
                    <TableCell>{cert.year}</TableCell>
                    <TableCell className="text-right">
                      <a 
                        href={cert.link}
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        View <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
