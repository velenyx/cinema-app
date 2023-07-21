interface HeadingProps {
  title: string;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ className = '', title }) => {
  return (
    <h1
      className={`font-semibold text-white text-opacity-80 ${
        className?.includes('xl') ? '' : 'text-3xl'
      } ${className}`}
    >
      {title}
    </h1>
  );
};
