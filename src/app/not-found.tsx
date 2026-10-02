import { Button } from "@/components/Sections";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden px-6 pt-32 text-center">
      <div className="grid-bg absolute inset-0" />
      <div className="relative">
        <p className="font-mono text-8xl text-signal">404</p>
        <h1 className="mt-6 text-3xl font-semibold">This page does not exist.</h1>
        <div className="mt-10 flex justify-center">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
