interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-360 px-6 md:px-10 lg:px-16 xl:px-20 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
