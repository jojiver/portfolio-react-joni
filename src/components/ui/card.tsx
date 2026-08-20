import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type CardProps = {
  image?: string;
  title: string;
  subtitle?: string;
  period?: string;
  description: string;
  features?: string[];
  buttonLabel?: string;
  buttonVariant?: "primary" | "secondary" | "tertiary";
  variant?: "default" | "education" | "project";
  reverse?: boolean;
};

export function Card({
  image,
  title,
  subtitle,
  period,
  description,
  features,
  buttonLabel,
  buttonVariant = "primary",
  variant = "default",
  reverse = false,
}: CardProps) {
  if (variant === "project") {
    return (
      <div
        className={cn(
          "grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12",
        )}
      >
        <div
          className={cn(
            "group aspect-square overflow-hidden rounded-xl border border-white/10 bg-[#111111]",
            reverse ? "md:order-2" : "md:order-1",
          )}
        >
          {image && (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}
        </div>

        <div className={cn(reverse ? "md:order-1" : "md:order-2")}>
          <h1 className="text-2xl font-bold text-white">{title}</h1>

          {subtitle && (
            <p className="mt-2 text-sm text-gray-400">{subtitle}</p>
          )}

          {description && (
            <p className="mt-5 text-gray-300">{description}</p>
          )}

          {features && features.length > 0 && (
            <ul className="mt-5 space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-blue-400">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {buttonLabel && (
            <div className="mt-6">
              <Button variant={buttonVariant}>{buttonLabel}</Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-lg border p-6 transition-all duration-300",
        variant === "default" &&
          "border-white/10 bg-[#111111] hover:-translate-y-1 hover:shadow-md",
        variant === "education" &&
          "border-white/10 bg-[#111111] hover:-translate-y-1 hover:shadow-md",
      )}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="mb-5 h-60 w-full rounded-lg object-cover"
        />
      )}

      <h1 className="text-xl font-semibold text-white">{title}</h1>

      {subtitle && (
        <p className="mt-2 text-gray-400">{subtitle}</p>
      )}

      {period && (
        <span className="mt-3 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-400">
          {period}
        </span>
      )}

      <p className="mt-5 text-gray-300">{description}</p>

      {features && features.length > 0 && (
        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-gray-300"
            >
              <span className="text-blue-400">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {buttonLabel && (
        <div className="mt-6">
          <Button variant={buttonVariant}>{buttonLabel}</Button>
        </div>
      )}
    </div>
  );
}