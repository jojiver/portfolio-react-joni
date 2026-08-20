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
  variant?: "default" | "education";
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
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border p-6 transition-all duration-300",
        variant === "default" &&
          "border-gray-700 bg-gray-900/50 hover:-translate-y-1 hover:shadow-md",
        variant === "education" &&
          "border-gray-200 bg-white hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-900/50",
      )}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="mb-6 h-60 w-full rounded-lg object-cover"
        />
      )}

      <h1
        className={cn(
          "text-xl font-semibold",
          variant === "default" && "text-white",
          variant === "education" && "text-gray-900 dark:text-white",
        )}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          className={cn(
            "mt-2",
            variant === "default" && "text-gray-400",
            variant === "education" && "text-gray-600 dark:text-gray-400",
          )}
        >
          {subtitle}
        </p>
      )}

      {period && (
        <span
          className={cn(
            "mt-3 inline-block rounded-full border px-4 py-1 text-sm",
            variant === "education" &&
              "border-gray-200 bg-gray-50 text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",
          )}
        >
          {period}
        </span>
      )}

      <p
        className={cn(
          "mt-5",
          variant === "default" && "text-center text-white",
          variant === "education" && "text-gray-600 dark:text-gray-400",
        )}
      >
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-300">
              <span className="text-blue-500">✓</span>
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
