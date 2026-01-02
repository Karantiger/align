import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBlobs from "@/components/FlootingBlobs";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-x-hidden">
      <FloatingBlobs />
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl space-y-4 text-sm md:text-base">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-muted-foreground">
          By using Align, you agree to use the app responsibly and understand
          that this product is provided as-is, without guarantees of
          availability or fitness for a specific purpose.
        </p>
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Personal responsibility</h2>
          <p className="text-muted-foreground">
            Align is a tool to help you track and support your own goals. You
            are responsible for any decisions or actions you take based on the
            information shown in the app.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Acceptable use</h2>
          <p className="text-muted-foreground">
            Do not use Align in ways that break local laws or attempt to harm the
            service, its infrastructure, or other users.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Changes to these terms</h2>
          <p className="text-muted-foreground">
            We may update these terms occasionally. Continued use of the app
            after changes means you accept the updated terms.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
