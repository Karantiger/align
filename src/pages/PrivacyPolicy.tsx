import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBlobs from "@/components/FlootingBlobs";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-x-hidden">
      <FloatingBlobs />
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl space-y-4 text-sm md:text-base">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground">
          This page explains, in simple language, how Align handles your data.
          The app is currently a showcase project and may evolve over time. If we
          make material changes to this policy, we&apos;ll update this page.
        </p>
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">What we collect</h2>
          <p className="text-muted-foreground">
            Align focuses on your habits, not your identity. Typical data may
            include the habits you create, completion status, and basic device
            information for analytics and performance.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">How we use your data</h2>
          <p className="text-muted-foreground">
            Data is used to power features like streaks, insights, and backups,
            and to improve the overall app experience. We do not sell your data.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Your choices</h2>
          <p className="text-muted-foreground">
            You can delete habits and entries at any time inside the app. If you
            have questions about how your information is handled, contact us at
            the email address listed in the footer.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
