import { SectionS, SectionWrapper } from './section.style';

export default function Section({ children }) {
  return (
    <SectionS>
      <SectionWrapper>{children}</SectionWrapper>
    </SectionS>
  );
}
