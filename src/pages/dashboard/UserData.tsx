const UserData = () => {
  const userData = {
    academicAchievements: 'Graduated with honors',
    academicAwards: 'Best Student of the Year Award',
    applicantSignature: 'John Doe',
    assistanceAmount: '$5000',
    assistanceType: 'Scholarship',
    careerGoal: 'To become a software engineer',
    category: 'Education',
    consent: 'I agree to the terms and conditions.',
    currentScholarshipsGrants: 'None',
    currentSchool: 'ABC High School',
    declaration:
      'I declare that all the information provided is true to the best of my knowledge.',
    dob: '1998-05-15',
    extracurricularActivities: 'Debate Club, Soccer Team',
    familyIncome: '$30000',
    financialNeedDescription:
      'My family is struggling financially due to medical expenses.',
    fullName: 'John Doe',
    fundingSource: 'XYZ Foundation',
    gender: 'Male',
    grade: '12',
    graduationDate: '2022-06-30',
    howAssis: 'Financial assistance for tuition fees',
    leadershipPositions: 'Class President',
    major: 'Computer Science',
    mobile: '+1234567890',
    nationality: 'American',
    parentNames: 'Jane Doe & John Doe Sr.',
    parentOccupations: 'Nurse & Engineer',
    proofOfIncome: 'Attached',
    recommendationLetters: 'Two letters from teachers',
    reference1: 'Jane Smith',
    reference2: 'Michael Johnson',
    siblingsEducationStatus: 'Siblings are also pursuing higher education',
    submissionDate: '2024-06-09',
    transcripts: 'Attached',
    arrivalDate: '2020-01-01',
    assistingOrganizations: 'Education Aid Foundation',
    communityConnections: 'Active member of local community center',
    employmentHistory: 'Part-time job as a tutor',
    employmentStatus: 'Part-time',
    familyMembers: '4',
    familyMembersStatus: 'Parents and two siblings',
    futurePlans: "Pursue a Master's degree",
    generalHealthCondition: 'Good',
    highestEducationLevel: 'High School',
    immediateNeeds: 'Financial assistance for textbooks',
    legalRepresentation: 'Not required',
    medicalCareAccess: 'Regular check-ups at local clinic',
    medicalNeeds: 'None',
    nationalId: '123456789',
    previousCountries: 'None',
    reasonForRefugeeStatus: 'N/A',
    references: 'Available upon request',
    refugeeId: '987654321',
  };

  return (
    <div className="">
      <table className="table">
        <tbody className="text-capitalize">
          {Object.entries(userData).map(([key, value]) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
