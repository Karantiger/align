import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBlobs from "@/components/FlootingBlobs";

const Templates = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-x-hidden">
      <FloatingBlobs />
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Routine & planner templates
        </h1>
        <p className="text-muted-foreground">
          Copy any of these simple templates into your Align routines or your
          favorite notes app. Adjust them to match your schedule and energy.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Morning reset</h2>
          <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1">
            <li>Wake up + hydrate</li>
            <li>5–10 minutes of movement or stretching</li>
            <li>Review today&apos;s top 3 tasks</li>
            <li>Check Align and confirm your habits for the day</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Study / deep work block</h2>
          <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1">
            <li>Set a clear outcome for this block</li>
            <li>Silence notifications / close extra tabs</li>
            <li>Work for 25–50 minutes</li>
            <li>5–10 minute break away from the screen</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Evening wind-down</h2>
          <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1">
            <li>Log your completed habits and streaks</li>
            <li>Note one win and one lesson from today</li>
            <li>Prepare clothes / bag for tomorrow</li>
            <li>Set a time to go offline and rest</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
