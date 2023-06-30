import React, { useState } from 'react';

const faqs = [
  {
    question: "When will products be available?",
    answer: "We are currently working on getting our products ready for sale. We will update our website as soon as they are available. Stay tuned!"
  },
  {
    question: "Will you be offering personal training?",
    answer: "We are currently developing our app, if we decide to offer personal training, we will update our website."
  },
  {
    question: "What kind of products do you plan on selling?",
    answer: "We plan on selling a variety of products that will help with safety as well as products to promote and assist healing."
  }
];

const styles = {
    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',   // 'auto' allows the FAQ card to take only the space it needs
        minHeight: '50vh', // this ensures that the card will always be at least half the viewport height
        padding: '2rem', // add some padding around the card
    },
    content: {
        width: '60%',
        padding: '20px',
        lineHeight: '1.5',
        color: '#333',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
};

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedFaqs = faqs.map((faq, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={faq.question}>
        <div className={`title ${active}`} onClick={() => onQuestionClick(index)}>
          <i className="dropdown icon"></i>
          {faq.question}
        </div>
        <div className={`content ${active}`}>
          <p>{faq.answer}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div style={styles.page}><div className="ui styled accordion" style={styles.content}>{renderedFaqs}</div></div>;
};

export default FAQPage;
