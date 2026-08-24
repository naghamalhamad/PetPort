export default function HomeIndicator({ light = false }) {
  return (
    <div className={`flex flex-col items-center justify-end h-[34px] shrink-0 ${light ? 'bg-white' : ''}`}>
      <div className="w-[134px] h-[5px] rounded-full bg-black mb-2" />
    </div>
  );
}
