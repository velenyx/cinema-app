import type { SkeletonProps } from 'react-loading-skeleton';
import ReactSkeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', ...rest }) => {
  return (
    <ReactSkeleton
      {...rest}
      baseColor='#1F2125'
      className={`rounded-lg ${className}`}
      highlightColor='#292A2E'
    />
  );
};
