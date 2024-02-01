import AddAdmin from "@/components/AddAdmin";

const Page = async () => {
  return (
    <div className="h-full w-full px-1 py-4 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold my-8">관리자 메뉴</h1>
      <div className="h-full max-h-[600px] aspect-square grid grid-cols-3 grid-rows-3 justify-center items-center gap-2 md:gap-3 lg:gap-4">
        <a
          className="w-full h-full rounded-2xl flex flex-col justify-center items-center bg-gradient-to-br from-[#469CE8] to-[#1335E6] lg:text-lg font-semibold text-white hover:-translate-y-0.5 hover:drop-shadow-xl transform transition-all"
          href="/admin/new-notice"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.186 2.09c.521.25 1.136.612 1.625 1.101.49.49.852 1.104 1.1 1.625.313.654.11 1.408-.401 1.92l-7.214 7.213c-.31.31-.688.541-1.105.675l-4.222 1.353a.75.75 0 0 1-.943-.944l1.353-4.221a2.75 2.75 0 0 1 .674-1.105l7.214-7.214c.512-.512 1.266-.714 1.92-.402zm.211 2.516a3.608 3.608 0 0 0-.828-.586l-6.994 6.994a1.002 1.002 0 0 0-.178.241L9.9 14.102l2.846-1.496c.09-.047.171-.107.242-.178l6.994-6.994a3.61 3.61 0 0 0-.586-.828zM4.999 5.5A.5.5 0 0 1 5.47 5l5.53.005a1 1 0 0 0 0-2L5.5 3A2.5 2.5 0 0 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.754.977.978.442.236.866.318 1.627.318h12.154c.76 0 1.185-.082 1.627-.318.42-.224.754-.559.978-.978.236-.442.318-.866.318-1.627V13a1 1 0 1 0-2 0v5.077c0 .459-.021.571-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5z"
              fill="#FFFFFF"
            />
          </svg>
          <span className="break-keep mt-2">공지사항 작성</span>
        </a>

        <a
          className="w-full h-full rounded-2xl flex flex-col justify-center items-center bg-gradient-to-br from-[#469CE8] to-[#1335E6] lg:text-lg font-semibold text-white hover:-translate-y-0.5 hover:drop-shadow-xl transform transition-all"
          href="/admin/counsels"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="break-keep mt-2">상담신청 목록</span>
        </a>

        <AddAdmin />
      </div>
    </div>
  );
};

export default Page;
