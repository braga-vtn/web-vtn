import React from 'react';

interface SvgAnthropicProps {
  width?: string;
  height?: string;
  fill?: string;
}

const SvgAnthropic: React.FC<SvgAnthropicProps> = (props) => {
  const { width = "1.2rem", height = "1.2rem", fill = "currentColor" } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M17.304 3.541h-3.672l6.696 16.918H24Zm-10.608 0L0 20.459h3.744l1.37-3.553h7.005l1.369 3.553h3.744L10.536 3.541Zm-.371 10.223L8.616 7.82l2.291 5.945Z" /></svg>
  );
}

export default SvgAnthropic;