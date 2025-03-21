import { ReactNode, useEffect, useState } from 'react';
import styles from './section.module.scss';

type TSectionProps = {
  widthPercentage: number;
  primaryMaxWidth: number;
  type: 'primary' | 'secondary';
  children: ReactNode;
};

const getSectionWidth = (
  innerWidth: number,
  type: string,
  primaryPercentage: number,
  primaryMaxWidth: number
) => {
  let sectionWidth =
    (innerWidth * primaryPercentage) / 100 <= primaryMaxWidth
      ? innerWidth
      : (innerWidth * primaryPercentage) / 100;
  console.log('type: ' + type + ' sectionWidth: ' + sectionWidth);
  if (type === 'primary') {
    return sectionWidth;
  } else {
    return innerWidth - sectionWidth;
  }
};

export const Section = ({ ...props }: TSectionProps) => {
  const [sectionWidth, setSectionWidth] = useState(
    getSectionWidth(
      window.innerWidth,
      props.type,
      props.widthPercentage,
      props.primaryMaxWidth
    )
  );
  useEffect(() => {
    window.addEventListener('resize', () => {
      setSectionWidth(
        getSectionWidth(
          window.innerWidth,
          props.type,
          props.widthPercentage,
          props.primaryMaxWidth
        )
      );
    });
  }, []);

  return (
    <div className={styles.container} style={{ width: sectionWidth }}>
      <section>{props.children}</section>
    </div>
  );
};
