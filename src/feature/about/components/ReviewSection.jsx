import people1 from "../../../assets/AboutImg/people1.png";
import people2 from "../../../assets/AboutImg/people2.png";
import people3 from "../../../assets/AboutImg/people3.png";

const ReviewSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between max-w-xs w-full">
          <div>
            <img
              src={people1}
              alt="David Brown"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-600 mb-4 text-center">
              "Their designs align perfectly with our brand strategy."
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold">David Brown</p>
            <p className="text-sm text-gray-500">Creative Director</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between max-w-xs w-full">
          <div>
            <img
              src={people2}
              alt="Jane Doe"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-600 mb-4 text-center">
              "Highly recommend their web design services!"
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold">Jane Doe</p>
            <p className="text-sm text-gray-500">Marketing Manager</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between max-w-xs w-full">
          <div>
            <img
              src={people3}
              alt="John Smith"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-600 mb-4 text-center">
              "They exceeded our expectations. Great work!"
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold">John Smith</p>
            <p className="text-sm text-gray-500">CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
