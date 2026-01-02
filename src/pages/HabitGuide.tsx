import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBlobs from "@/components/FlootingBlobs";

const HabitGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-x-hidden">
      <FloatingBlobs />
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Habit-building guide</h1>
        <p className="text-muted-foreground mb-6">
          Build habits that actually stick. Use this short guide as a starting point
          for designing routines that are realistic, motivating, and aligned with
          the way you live.
        </p>
        <ol className="space-y-4 list-decimal list-inside">
          <li>
            <span className="font-semibold">Start tiny.</span> Turn big goals into
            actions you can complete in under 2 minutes. For example: "open the
            app and log 1 habit" instead of "plan my entire week".
          </li>
          <li>
            <span className="font-semibold">Attach habits to anchors.</span> Link
            new habits to things you already do daily: after brushing your teeth,
            commuting, or making coffee.
          </li>
          <li>
            <span className="font-semibold">Track, don&apos;t judge.</span> Focus on
            showing up, not perfection. Use streaks and trends to learn what works
            instead of blaming yourself when you miss a day.
          </li>
          <li>
            <span className="font-semibold">Review weekly.</span> Once a week,
            quickly review what you completed, what felt hard, and what you want
            to adjust for the next 7 days.
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
};

export default HabitGuide;
