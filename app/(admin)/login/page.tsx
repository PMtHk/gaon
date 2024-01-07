import LoginForm from "@/components/forms/Login.form";

const Page = async () => {
  return (
    <div className="container w-full h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="w-full max-w-[480px] p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-gray-900">
          관리자 로그인
        </h1>

        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
