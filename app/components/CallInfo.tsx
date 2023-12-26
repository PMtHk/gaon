const CallInfo = async () => {
  return (
    <div className="min-h-80 h-full w-full border-2 bg-call-info bg-cover rounded-2xl ">
      <a href="tel:032-566-6645" className="w-full h-full flex flex-col items-center justify-center">
        <span className="text-slate-50 text-4xl font-semibold">
          무료상담 / 등급신청
        </span>
        <span className="mt-4 text-slate-50 text-4xl font-semibold">
          032-566-6645
        </span>
      </a>
    </div>
  );
};

export default CallInfo;
