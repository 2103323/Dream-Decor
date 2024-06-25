import ContactForm from "@/components/shared/ContactForm";

export default function Home() {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">Contact Us</h1>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}