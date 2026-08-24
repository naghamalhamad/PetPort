export default function PhoneFrame({ children }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[radial-gradient(circle_at_top,#f0f0ff,#dcdcf5_60%,#cfcfef)] py-8 px-4">
      <div className="relative">
        <div className="relative w-[390px] h-[844px] bg-black rounded-[55px] p-[14px] shadow-2xl">
          <div className="relative w-full h-full bg-surface rounded-[42px] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-[16px] z-50" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
