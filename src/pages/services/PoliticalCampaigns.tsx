import StackingSection from '../../components/StackingSection';

export default function PoliticalCampaigns() {
  const totalSections = 15;
  const sections = Array.from({ length: totalSections }, (_, i) => i);

  return (
    <div className="bg-black min-h-screen">
      <div className="pt-20 w-full">
        {sections.map((index) => (
          <StackingSection key={index} index={index} total={totalSections}>
            <div className="text-center">
              <h1>Political Campaigns - Section {index + 1}</h1>
              <p className="mt-2 text-gray-400">Campaign Strategy</p>
            </div>
          </StackingSection>
        ))}
      </div>
    </div>
  );
}
