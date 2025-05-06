const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'NextJs',
  'VueJs',
  'HTML',
  'CSS',
  'Tailwind',
];

const HomeSkills = () => {
  return (
    <section className="py-16">
      <div className="container m-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Frontend Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {skills.map(
            (skill) => (
              <div key={skill} className="bg-card rounded-lg p-4 text-center shadow-sm">
                <span className="font-medium">{skill}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>);
};

export default HomeSkills;
