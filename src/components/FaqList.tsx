import { FAQ_ITEMS } from "@/lib/site";

export function FaqList({ limit }: { limit?: number }) {
  const items = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;

  return (
    <div className="space-y-6 max-w-4xl">
      {items.map((item) => (
        <article
          key={item.question}
          className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm"
        >
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
            {item.question}
          </h3>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 mb-4">
            <span className="block text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
              Direct Response
            </span>
            <p className="text-slate-900 font-medium text-sm sm:text-base leading-relaxed">
              {item.shortAnswer}
            </p>
          </div>
          <div className="text-slate-600 text-sm leading-relaxed">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Supporting Detail
            </span>
            <p>{item.detailedAnswer}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
