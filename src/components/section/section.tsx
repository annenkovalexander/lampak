import { ReactNode, useEffect, useState } from 'react';
import styles from './section.module.scss';

type TSectionProps = {
  widthPercentage: number;
  type: 'primary' | 'secondary';
  children: ReactNode;
};

export const Section = ({ ...props }: TSectionProps) => {
  const [sectionWidth, setSectionWidth] = useState(
    (window.innerWidth * props.widthPercentage) / 100
  );
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--section-width',
      `${(window.innerWidth * props.widthPercentage) / 100}px`
    );
    window.addEventListener('resize', () => {
      setSectionWidth((window.innerWidth * props.widthPercentage) / 100);
      document.documentElement.style.setProperty(
        '--section-width',
        `${(window.innerWidth * props.widthPercentage) / 100}px`
      );
    });
  }, []);

  return (
    <div className={styles.container}>
      {((props.type === 'secondary' && sectionWidth > 500) ||
        props.type === 'primary') && <section>{props.children}</section>}
    </div>
  );
};
