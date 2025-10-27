import StackingSection from '../../components/StackingSection';

export default function PublicRelations() {
  const totalSections = 12;
  const sections = Array.from({ length: totalSections }, (_, i) => i);

  return (
    <div className="bg-black min-h-screen">
      <div className="pt-20">
        {sections.map((index) => (
          <StackingSection key={index} index={index} total={totalSections}>
            <div className="text-center">
              <h1>Public Relations - Section {index + 1}</h1>
              <p className="mt-2 text-gray-400">Media & PR Strategy</p>
            </div>
          </StackingSection>
        ))}
      </div>
    </div>
  );
}
