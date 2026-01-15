import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  className?: string;
};

export default function Grid({ children, className = "" }: GridProps) {
  return (
    <div
      className={`grid grid-cols-4 mg:grid-cols-9 lg:grid-cols-12 ${className}`}
    >
      {children}
    </div>
  );
}
