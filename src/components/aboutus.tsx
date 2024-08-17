import TextReveal from "@/components/magicui/text-reveal";

export async function TextRevealDemo() {
  return (
    <div className="z-20 flex min-h-[12rem] max-w-3xl flex-col items-center justify-center rounded-lg border bg-white dark:bg-black p-6">
      <h1 className="text-3xl font-bold mb-2 text-black dark:text-white text-center">
        About Us
      </h1>
      <TextReveal
        text="Founded in 2009, Karthik Academy is a leading distance education institute committed to providing flexible and quality learning opportunities. We have empowered thousands of students to achieve their academic and career goals through our innovative programs. Our experienced faculty and comprehensive curriculum ensure a rewarding educational experience that meets the needs of today’s learners. Join us to unlock your potential and succeed on your terms."
        className="text-base text-justify"
      />
    </div>
  );
}
