import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBlobs from "@/components/FlootingBlobs";

const ProductivityTips = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-x-hidden">
      <FloatingBlobs />
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Daily productivity tips</h1>
        <p className="text-muted-foreground">
          Use these quick ideas to get more done without burning out. Pick one or
          two that fit your day instead of trying to apply everything at once.
        </p>
        <ul className="space-y-3 list-disc list-inside">
          <li>
            Plan tomorrow the night before: choose 1–3 important tasks and add
            them to your Align routine.
          </li>
          <li>
            Work in small focus blocks (25–50 minutes) followed by short breaks.
          </li>
          <li>
            Keep a visible "Done" list so you can see your progress, not just
            what&apos;s left.
          </li>
          <li>
            Protect your energy first: sleep, movement, and breaks are part of
            productivity—not a reward after.
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default ProductivityTips;
