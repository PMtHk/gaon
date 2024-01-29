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
          href="/notices"
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
              d="M3.59938 6.22413C3.362 4.82033 4.68002 3.64638 6.07306 4.02084L7.12777 4.30435C7.96485 4.52937 8.85305 4.19092 9.31887 3.46943L10.3298 1.90368C11.1077 0.698775 12.8923 0.698773 13.6702 1.90368L14.6811 3.46943C15.1469 4.19092 16.0351 4.52937 16.8722 4.30435L17.9269 4.02084C19.32 3.64638 20.638 4.82033 20.4006 6.22413L20.1405 7.76265C20.0068 8.55335 20.3773 9.3442 21.0747 9.75663L22.0388 10.3268C23.3204 11.0847 23.3204 12.9153 22.0388 13.6732L21.0747 14.2434C20.3773 14.6558 20.0068 15.4467 20.1405 16.2374L20.4006 17.7759C20.638 19.1797 19.32 20.3536 17.9269 19.9792L16.8722 19.6957C16.0351 19.4706 15.1469 19.8091 14.6811 20.5306L13.6702 22.0963C12.8923 23.3012 11.1077 23.3012 10.3298 22.0963L9.31887 20.5306C8.85305 19.8091 7.96485 19.4706 7.12777 19.6957L6.07306 19.9792C4.68002 20.3536 3.362 19.1797 3.59938 17.7759L3.85954 16.2374C3.99324 15.4467 3.62271 14.6558 2.92531 14.2434L1.96116 13.6732C0.679612 12.9153 0.679614 11.0847 1.96116 10.3268L2.92531 9.75663C3.62271 9.3442 3.99324 8.55335 3.85954 7.76265L3.59938 6.22413ZM9.03042 6.14621H6.06085V9.0731L3.09127 12L6.06085 14.9269V17.8538H9.03042L12 20.7807L14.9696 17.8538H17.9392V14.9269L20.9087 12L17.9392 9.0731V6.14621H14.9696L12 3.21931L9.03042 6.14621Z"
              fill="#ffffff"
            />
            <path
              d="M16.4515 12C16.4515 14.4247 14.4572 16.3903 11.9971 16.3903C9.53706 16.3903 7.54277 14.4247 7.54277 12C7.54277 9.57528 9.53706 7.60965 11.9971 7.60965C14.4572 7.60965 16.4515 9.57528 16.4515 12ZM9.51963 12C9.51963 13.3486 10.6288 14.4419 11.9971 14.4419C13.3654 14.4419 14.4746 13.3486 14.4746 12C14.4746 10.6514 13.3654 9.5581 11.9971 9.5581C10.6288 9.5581 9.51963 10.6514 9.51963 12Z"
              fill="#fffffF"
            />
          </svg>
          <span className="break-keep mt-2">공지사항 관리</span>
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
