import Navbar from "../components/Navbar"; // Adjust path if needed
import HeaderSection from "../components/headersection"; // Adjust path if needed
import { TextRevealDemo } from "../components/aboutus"; // Adjust path if needed

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Include Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-24 space-y-12">
        {/* Include HeaderSection */}
        <HeaderSection />

        {/* Include About Section */}
        <TextRevealDemo />
      </main>
    </div>
  );
}
