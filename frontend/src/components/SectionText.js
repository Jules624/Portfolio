export default function SectionTexte({ title, subtitle, text }) { return (
<div className="flex justify-center items-center px-6 py-1">
  <div className="max-w-6xl w-full px-8">
    <h2
      className="uppercase text-sm tracking-widest text-gray-500 font-bold mb-2"
    >
      {title}
    </h2>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{subtitle}</h3>
    <p className="text-gray-700 leading-relaxed">{text}</p>
  </div>
</div>
); }
