export default function Experience() {
  const experience = [
    {
      year: 2021,
      company: 'Ernst&Yung',
      position: 'Audit Intern',
      description:
        'During my internship at EY in the audit department, I was responsible for preparing PBC lists, analyzing spreadsheet data, examining company accounts, recalculating client accounts, and directly liaising with clients.',
    },
    {
      year: 2021,
      company: 'Japan Tabacco International (JTI)',
      position: 'Trade Marketing Trainee',
      description:
        'Facilitated the launch and communication of activities across markets by preparing essential calculations, collecting data for program reports, analyzing program effectiveness, and contributing to program development through budgeting and defining KPIs and thresholds.',
    },
    {
      year: 2022,
      company: 'Japan Tabacco International (JTI)',
      position: 'Capital & Operational Expenses Analyst',
      description:
        'Oversaw the planning process for OPEX/CAPEX, enhanced templates for information management, and maintained monthly closing workflows. Additionally, I improved reporting accuracy by incorporating Work Breakdown Structure (WBS) elements into actual reports.',
    },
    {
      year: 2023,
      company: 'Japan Tabacco International (JTI)',
      position: 'FP&A Specialist',
      description:
        'Crafted financial models and conducted comprehensive financial analyses to inform strategic decision-making. I managed monthly closing workflows, performed variance analysis, and maintained intricate financial spreadsheets and databases for accurate forecasting. Additionally, I collaborated with cross-functional teams to gather financial data and assess the financial impact of proposed initiatives.',
    },
    {
      year: 2023,
      company: 'Anavate Partners',
      position: 'Anaplan Model Builder',
      description:
        'Collaborated closely with clients, offering strategic recommendations for model design and implementation tailored to their business needs. I led the development of Anaplan models specifically for FP&A, facilitating streamlined budgeting, forecasting, and financial analysis processes. Through seamless integration of financial data from diverse sources, I ensured accurate and real-time analysis for informed decision-making. Additionally, I conducted specialized training sessions to empower clients in leveraging the FP&A-focused Anaplan models for strategic financial insights.',
    },
  ];
  return (
    <div className="flex flex-col items-center md:min-h-screen justify-center gap-4">
      <h3 className="text-5xl font-medium inline">Experience</h3>
      <div className="w-11/12 md:w-9/12 mt-10 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-black before:dark:bg-slate-300">
        <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-teal-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
          <h3 className="absolute left-0 text-lg font-semibold">2017</h3>
          <p className="flex flex-col gap-3">
            <h3 className="flex flex-col font-medium text-teal-700 text-lg dark:text-teal-400">
              KIMEP University&nbsp;
              <span className="font-normal text-black dark:text-white">
                {' '}
                Bachelor in Accounting and Audit (BACTA)
              </span>
            </h3>
            <p>
              Graduated from KIMEP University with a major in Accounting and
              Audit, achieving a GPA of 4.07 out of 4.33.
            </p>
          </p>
        </div>
        {experience.map((item, index) => (
          <div
            key={index}
            className="pl-24 mt-14 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-teal-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]"
          >
            <h3 className="absolute left-0 text-lg font-semibold">
              {item.year}
            </h3>
            <p className="flex flex-col gap-3">
              <h3 className="flex flex-col font-medium text-teal-700 text-lg dark:text-teal-400">
                {item.company}&nbsp;
                <span className="font-normal text-black dark:text-white">
                  {item.position}
                </span>
              </h3>
              <p>{item.description}</p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
