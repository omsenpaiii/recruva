import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}-monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="64"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
          >
            ä
          </text>
        </clipPath>
      </defs>

      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});