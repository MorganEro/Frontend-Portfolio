import { cn } from '@/lib/utils';

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'mx-auto max-w-6xl xl:max-w-7xl px-6 md:px-10 pt-6 lg:pt-16 pb-6',
        className
      )}>
      {children}
    </div>
  );
}
export default Container;
