import { projects } from "../../constants";
import { HoverEffect } from "../ui/card-hover-effect";

export function AnimateCard() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
        consequatur. Ut eos similique eligendi nostrum. Nihil impedit, quidem
        dolorum doloremque, perferendis corporis ullam laboriosam vitae dolor
        debitis sint unde at.
      </p>
    </div>
  );
}
