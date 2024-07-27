const ResumeTemplate = () => {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Peter Madison</h1>
          <p className="text-xl">Masters-Qualified Pharmacist</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold bg-teal-600 text-white p-2">Personal details</h2>
          <div className="p-4 border border-gray-300">
            <p><strong>Email address:</strong> peter.madison@gmail.com</p>
            <p><strong>Phone number:</strong> +44 75259 95873</p>
            <p><strong>Address:</strong> 10 Heyward Close, BD1 7ND Leeds</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/peter-madison</p>
            <p><strong>GPhC Registration No:</strong> 2058759</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold bg-teal-600 text-white p-2">Profile</h2>
          <div className="p-4 border border-gray-300">
            <p>
              I am a qualified pharmacist, adept at administering medication and monitoring supplies. With a Master's degree in pharmacy (MPharm), I have a strong pharmaceutical and medical background, as well as in-depth knowledge of GPhC standards. I also speak fluent German, which I enjoy using to communicate and work with global pharmaceutical companies.
            </p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold bg-teal-600 text-white p-2">Employment</h2>
          <div className="p-4 border border-gray-300">
            <div className="mb-4">
              <p className="font-bold">Sep 2019 - Present</p>
              <p className="font-semibold">Pharmacist</p>
              <p>Tyler's Pharmacy, Leeds</p>
              <ul className="list-disc list-inside">
                <li>Managing the entire inventory of medicines, ensuring the correct preparation and dispensing of medications.</li>
                <li>Liaising with professionals in local companies.</li>
                <li>Managing day-to-day operations; generating £100k in additional revenue.</li>
                <li>Administering pharmaceutical operations; including SOPs and incident reviews.</li>
                <li>Running our monthly staff training programme.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Sep 2018 - Aug 2019</p>
              <p className="font-semibold">Student Pharmacist</p>
              <p>Boots Pharmacy, Leeds</p>
              <ul className="list-disc list-inside">
                <li>Dispensed prescriptions daily and dispensed advice on the safe and correct use of medicines.</li>
                <li>Ran our flu vaccination clinics.</li>
                <li>Provided healthcare advice in a busy high-street pharmacy that filled 1500 prescriptions weekly.</li>
                <li>Managed dispensary stock and maintained audit records, reducing wastage.</li>
                <li>Introduced a filing system that cut customer waiting times by 50%.</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    );
  };
  
  export default ResumeTemplate;
  