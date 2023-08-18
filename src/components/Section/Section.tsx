import { ReactNode } from 'react';
import { SectionS, SectionWrapper } from './section.styled';

type SectionProps = {
  children: ReactNode;
} 

export default function Section({ children }: SectionProps) {
  return (
    <SectionS>
      <SectionWrapper>{children}</SectionWrapper>
    </SectionS>
  );
}
