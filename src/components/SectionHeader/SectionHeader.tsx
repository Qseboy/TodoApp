import { SectionHeaderTitle } from './sectionHeader.styled';

type SectionHeaderProps = {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <>
      <SectionHeaderTitle>{title}</SectionHeaderTitle>
    </>
  );
}
