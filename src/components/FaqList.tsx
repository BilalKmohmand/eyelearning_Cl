import { FAQ_ITEMS } from "@/lib/site";

export function FaqList({ limit }: { limit?: number }) {
  const items = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;

  return (
    <div className="space-y-6 max-w-4xl">
      {items.map((item) => (
        <div
          key={item.question}
          className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-2">{item.question}</h3>
          <p className="text-slate-800 text-sm sm:text-base font-medium mb-3 leading-relaxed">
            {item.shortAnswer}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">{item.detailedAnswer}</p>
        </div>
      ))}
    </div>
  );
}
