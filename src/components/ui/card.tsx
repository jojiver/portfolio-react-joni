import { Button } from "@/components/ui/button";

type CardProps = {
  image?: string;
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary" | "tertiary";
};

export function Card({ image, title, subtitle, description, features, buttonLabel, buttonVariant = "primary",}: CardProps) {
  return (
    <div className="border border-black-500 rounded-lg p-6 bg-gray-50 dark:bg-gray-900/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-fit rounded-lg"
        />
      )}
      <h1 className="justify-items-center text-xl font-semibold mb-2 text-white">
        {title}
      </h1>
      {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
        <p className="text-white-600 mb-5 text-white text-center">
        {description}
      </p>
      {features && (
        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-300">
              <span className="text-blue-500">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      <span className="text-sm"></span>
      <Button variant={buttonVariant}>{buttonLabel}</Button>
    </div>
  );
}
