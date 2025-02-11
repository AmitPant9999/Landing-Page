"use client"
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface FAQ {
  question: string;
  answer: string;
}

const Section15: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent) => {
    setExpanded(panel === expanded ? false : panel);
  };

  const faqData: FAQ[] = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2>FREQUENTLY ASKED QUESTIONS (FAQS)</h2>
        <div className='mt-24'>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              className="mb-4 hover:bg-gray-100 py-4 shadow-none"
            >
              <AccordionSummary
                expandIcon={expanded === `panel${index}` ? <RemoveIcon /> : <AddIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                className="bg-gray-50 hover:bg-gray-100"
              >
                <Typography className="text-lg font-medium text-gray-800">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className="p-6">
                <Typography className="text-gray-600">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section15;