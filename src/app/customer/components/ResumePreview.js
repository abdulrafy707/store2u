const ResumePreview = ({ formData }) => {
    return (
      <div className="w-1/2 p-8 bg-white shadow-md rounded-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">{formData.name}</h1>
          <p className="text-xl">{formData.headline}</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold bg-teal-600 text-white p-2">Personal details</h2>
          <div className="p-4 border border-gray-300">
            <p><strong>Email address:</strong> {formData.email}</p>
            <p><strong>Phone number:</strong> {formData.phone}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>LinkedIn:</strong> {formData.linkedin}</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold bg-teal-600 text-white p-2">Profile</h2>
          <div className="p-4 border border-gray-300">
            <p>{formData.profile}</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold bg-teal-600 text-white p-2">Education</h2>
          <div className="p-4 border border-gray-300">
            <p>{formData.education}</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold bg-teal-600 text-white p-2">Experience</h2>
          <div className="p-4 border border-gray-300">
            <p>{formData.experience}</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold bg-teal-600 text-white p-2">Skills</h2>
          <div className="p-4 border border-gray-300">
            <p>{formData.skills}</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold bg-teal-600 text-white p-2">Extracurricular Activities</h2>
          <div className="p-4 border border-gray-300">
            <p>{formData.activities}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ResumePreview;
  