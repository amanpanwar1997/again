import StackingSection from '../../components/StackingSection';

export default function GraphicDesigning() {
  const totalSections = 15;
  const sections = Array.from({ length: totalSections }, (_, i) => i);

  return (
    <div className="bg-black min-h-screen">
      <div className="pt-20 w-full">
        {sections.map((index) => (
          <StackingSection key={index} index={index} total={totalSections}>
            <div className="text-center">
              <h1>Graphic Designing - Section {index + 1}</h1>
              <p className="mt-2 text-gray-400">UI/UX & Print Design</p>
            </div>
          </StackingSection>
        ))}
      </div>
    </div>
  );
}
