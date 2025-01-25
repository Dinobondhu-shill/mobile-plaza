import Categories from "./Categories";
import Banner from "./Banner";
import BestSeller from "./BestSeller";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="py-2 rounded-2xl bg-blue-400 w-full max-w-md px-3 my-2">
      <marquee direction="left" scrollamount="5" behavior="scroll">

    আমাদের রয়েছে ক্যাশ অন ডেলিভারি, আপনি প্রোডাক্ট হাতে পেয়ে টাকা পরিশোধ
    করতে পারবেন। ডেলিভারি চার্জ অগ্রিম দিতে হবে: ঢাকা সিটি: ১৫০ টাকা, 
    ঢাকা সিটির বাহিরে: ২০০ টাকা। 01744141618 (বিকাশ / নগদ / রকেট পার্সোনাল) 🛑 
    বৃহস্পতিবার মার্কেট সাপ্তাহিক বন্ধ।
</marquee>
      </div>
      <Categories />
      <BestSeller />
    </div>
  );
};

export default Homepage;
