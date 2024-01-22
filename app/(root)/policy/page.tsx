const Page = () => {
  return (
    <div className="container w-full min-h-[100vh-64px] md:min-h-[100vh-80px]">
      <div className="mt-10 mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex flex-col items-center text-sky-900">
          <span className="text-base md:text-lg lg:text-xl font-light text-pink-600">
            Long-term Care Insurance
          </span>
          노인장기요양보험제도
        </h1>
      </div>

      <div className="flex flex-col items-center p-4">
        <div className="md:text-center text-lg break-keep">
          <p className="max-w-3xl">
            고령이나 노인성 질병 등의 사유로 일상생활을 혼자서 수행하기 어려운
            노인 등에게
            <br className="hidden md:block" /> 신체활동 또는 가사활동 지원 등의
            장기요양급여를 제공하여 노후의 건강증진 및 생활안정을 도모하고
            <br className="hidden md:block" /> 그 가족의 부담을 덜어줌으로써
            국민의 삶의 질을 향 상하도록 함을 목적으로 시행하는
            사회보험제도입니다.
          </p>
        </div>

        <div className="w-full mt-32 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-sky-900 mb-12">
            장기요양인정 및 이용절차
          </h2>
          <div className="w-full grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-full border rounded-xl p-6 flex flex-col items-center gap-4 hover:bg-sky-200">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7V6.2C16 5.0799 16 4.51984 15.782 4.09202C15.5903 3.71569 15.2843 3.40973 14.908 3.21799C14.4802 3 13.9201 3 12.8 3H11.2C10.0799 3 9.51984 3 9.09202 3.21799C8.71569 3.40973 8.40973 3.71569 8.21799 4.09202C8 4.51984 8 5.0799 8 6.2V7M9 15V12M15 15V12M3.02721 10.0263C3.38776 10.3719 7.28572 14 12 14C16.7143 14 20.6122 10.3719 20.9728 10.0263M3.02721 10.0263C3 10.493 3 11.0665 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 11.0665 21 10.493 20.9728 10.0263M3.02721 10.0263C3.06233 9.4241 3.14276 8.99959 3.32698 8.63803C3.6146 8.07354 4.07354 7.6146 4.63803 7.32698C5.27976 7 6.11984 7 7.8 7H16.2C17.8802 7 18.7202 7 19.362 7.32698C19.9265 7.6146 20.3854 8.07354 20.673 8.63803C20.8572 8.99959 20.9377 9.4241 20.9728 10.0263"
                  stroke="#000000"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-semibold text-sky-700 text-xl">01</span>
              <span className="break-keep">장기요양인정신청 및 방문조사</span>
            </div>

            <div className="w-full border rounded-xl p-6 flex flex-col items-center gap-4 hover:bg-sky-200">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0002 2.75C8.54841 2.75 5.75019 5.54822 5.75019 9C5.75019 12.4518 8.54841 15.25 12.0002 15.25C15.452 15.25 18.2502 12.4518 18.2502 9C18.2502 5.54822 15.452 2.75 12.0002 2.75ZM4.25019 9C4.25019 4.71979 7.71998 1.25 12.0002 1.25C16.2804 1.25 19.7502 4.71979 19.7502 9C19.7502 9.94098 19.5825 10.8428 19.2753 11.6772L21.5626 14.0454C21.8199 14.3118 22.0343 14.5338 22.1944 14.7187C22.3522 14.9009 22.5139 15.1092 22.6094 15.3513C22.9428 16.1961 22.6746 17.1959 21.8704 17.6883C21.6392 17.8298 21.3758 17.8885 21.1493 17.9264C20.9178 17.9652 20.6236 17.9963 20.2765 18.033L20.2532 18.0355C19.794 18.084 19.7068 18.0995 19.6475 18.1222C19.4694 18.1905 19.3231 18.3359 19.2507 18.5386C19.2252 18.6099 19.2096 18.7116 19.1631 19.1831L19.1609 19.2053C19.1253 19.5664 19.0954 19.869 19.0583 20.1065C19.0222 20.3379 18.9672 20.601 18.8352 20.8321C18.3659 21.654 17.3765 21.9623 16.5183 21.5992C16.2767 21.497 16.0722 21.3259 15.8976 21.1637C15.7189 20.9978 15.5045 20.7758 15.2473 20.5095L15.2277 20.4892L12.0002 17.0893L8.76823 20.4939L8.75308 20.5095C8.49587 20.7758 8.28151 20.9978 8.10281 21.1637C7.92813 21.3259 7.72367 21.497 7.48209 21.5992C6.6239 21.9623 5.63452 21.654 5.16517 20.8321C5.03322 20.601 4.97819 20.3379 4.94206 20.1065C4.90498 19.869 4.87512 19.5664 4.83951 19.2053L4.83732 19.1831C4.7908 18.7116 4.77523 18.6099 4.74972 18.5386C4.67726 18.3359 4.53097 18.1905 4.35286 18.1222C4.2936 18.0995 4.20636 18.084 3.7472 18.0355L3.72392 18.033C3.37677 17.9963 3.08258 17.9652 2.85103 17.9264C2.62462 17.8885 2.36122 17.8298 2.12998 17.6883C1.32579 17.1959 1.05757 16.1961 1.39098 15.3513C1.48651 15.1092 1.64822 14.9009 1.80598 14.7187C1.96613 14.5338 2.18049 14.3118 2.43786 14.0453L4.72504 11.6772C4.41789 10.8428 4.25019 9.94098 4.25019 9ZM5.42778 13.1088L3.53172 15.072C3.25561 15.3578 3.07007 15.5503 2.93988 15.7007C2.8179 15.8415 2.78939 15.896 2.7864 15.9018C2.69612 16.1307 2.78577 16.3246 2.90479 16.4036C2.91371 16.4065 2.9646 16.4246 3.09871 16.447C3.27988 16.4773 3.52823 16.5039 3.90496 16.5438C3.93016 16.5464 3.95516 16.5491 3.97996 16.5517C4.31908 16.5871 4.62148 16.6188 4.88973 16.7216C5.48872 16.9512 5.94694 17.4316 6.16216 18.0336C6.25843 18.3028 6.2881 18.6065 6.32271 18.9608C6.32513 18.9855 6.32758 19.0106 6.33007 19.0358C6.36846 19.4249 6.39438 19.6848 6.4241 19.8751C6.44954 20.038 6.47003 20.0902 6.47074 20.0934C6.55056 20.2277 6.71461 20.2942 6.89565 20.2185C6.89565 20.2185 6.94566 20.1912 7.08222 20.0644C7.22686 19.9301 7.41207 19.7388 7.68699 19.4541L7.68926 19.4518L10.4092 16.5865C8.31337 16.1493 6.52823 14.8654 5.42778 13.1088ZM13.5911 16.5865C15.687 16.1493 17.4721 14.8654 18.5726 13.1088L20.4687 15.072C20.7448 15.3578 20.9303 15.5503 21.0605 15.7007C21.1825 15.8415 21.211 15.896 21.214 15.9018C21.3042 16.1307 21.2146 16.3246 21.0956 16.4036C21.0867 16.4065 21.0358 16.4246 20.9017 16.447C20.7205 16.4773 20.4721 16.5039 20.0954 16.5438C20.0702 16.5464 20.0452 16.5491 20.0204 16.5517C19.6813 16.5871 19.3789 16.6188 19.1107 16.7216C18.5117 16.9512 18.0534 17.4316 17.8382 18.0336C17.742 18.3028 17.7123 18.6065 17.6777 18.9608C17.6752 18.9855 17.6728 19.0106 17.6703 19.0358C17.6319 19.4249 17.606 19.6848 17.5763 19.8751C17.5508 20.038 17.5304 20.0902 17.5296 20.0934C17.4495 20.2282 17.2846 20.2946 17.1028 20.2177L17.1048 20.2186C17.1048 20.2186 17.0547 20.1912 16.9182 20.0644C16.7735 19.9301 16.5883 19.7388 16.3134 19.4541L16.3111 19.4518L13.5911 16.5865ZM12.0002 7.03449C11.9421 7.13513 11.8774 7.25103 11.8012 7.38769L11.7029 7.56405C11.696 7.5765 11.6885 7.59009 11.6806 7.60466C11.6021 7.74827 11.472 7.9861 11.2552 8.15071C11.0338 8.31877 10.7675 8.37659 10.6118 8.4104C10.5962 8.41379 10.5817 8.41693 10.5685 8.41992L10.3776 8.46312C10.2024 8.50275 10.0597 8.53509 9.93769 8.56575C10.017 8.66345 10.1201 8.78474 10.2542 8.94154L10.3844 9.09372C10.3936 9.10452 10.4036 9.11609 10.4143 9.1284C10.5223 9.25273 10.6965 9.45346 10.7771 9.71261C10.8568 9.96869 10.8293 10.2324 10.812 10.3988C10.8102 10.4154 10.8086 10.431 10.8072 10.4456L10.7875 10.6487C10.7693 10.8369 10.7551 10.9872 10.7456 11.1094C10.8498 11.0635 10.9684 11.0089 11.1092 10.9441L11.288 10.8618C11.3003 10.8561 11.3138 10.8498 11.3283 10.8429C11.4718 10.7752 11.7215 10.6575 12.0002 10.6575C12.2789 10.6575 12.5285 10.7752 12.672 10.8429C12.6866 10.8498 12.7001 10.8561 12.7124 10.8618L12.8912 10.9441C13.032 11.0089 13.1505 11.0635 13.2547 11.1094C13.2453 10.9872 13.2311 10.8369 13.2129 10.6487L13.1932 10.4456C13.1918 10.431 13.1902 10.4154 13.1884 10.3988C13.1711 10.2324 13.1436 9.96869 13.2233 9.71261C13.3038 9.45346 13.4781 9.25273 13.586 9.12841C13.5967 9.11609 13.6068 9.10452 13.616 9.09372L13.7462 8.94153C13.8802 8.78474 13.9833 8.66345 14.0627 8.56575C13.9407 8.53509 13.798 8.50275 13.6228 8.46312L13.4319 8.41992C13.4187 8.41693 13.4042 8.41379 13.3886 8.4104C13.2329 8.37659 12.9666 8.31877 12.7452 8.15071C12.5284 7.9861 12.3983 7.74828 12.3198 7.60466C12.3118 7.5901 12.3044 7.5765 12.2975 7.56405L12.1991 7.38769C12.123 7.25103 12.0583 7.13513 12.0002 7.03449ZM11.0137 5.79963C11.1859 5.57481 11.4985 5.25 12.0002 5.25C12.5019 5.25 12.8145 5.57481 12.9867 5.79963C13.151 6.01421 13.3165 6.31124 13.4862 6.61577C13.4939 6.62961 13.5016 6.64347 13.5093 6.65734L13.6076 6.83369C13.6304 6.87459 13.6484 6.90677 13.6641 6.9343C13.6914 6.94071 13.7232 6.94792 13.7629 6.95691L13.9538 7.0001C13.9695 7.00364 13.9851 7.00717 14.0007 7.0107C14.3286 7.08478 14.6543 7.15839 14.9044 7.25695C15.1806 7.36577 15.5549 7.5777 15.6991 8.04161C15.8409 8.49734 15.662 8.88336 15.5058 9.13146C15.3613 9.36108 15.1416 9.61786 14.9167 9.88074C14.9065 9.89262 14.8963 9.90452 14.8862 9.91642L14.756 10.0686C14.7215 10.1089 14.6955 10.1394 14.6736 10.1657C14.6766 10.202 14.6807 10.2443 14.6862 10.3009L14.7059 10.504C14.7074 10.5195 14.7089 10.5349 14.7104 10.5504C14.7446 10.9023 14.7776 11.2424 14.7655 11.5145C14.7528 11.7997 14.6843 12.2315 14.2971 12.5254C13.8977 12.8286 13.4566 12.7626 13.1769 12.6824C12.9191 12.6086 12.6146 12.4682 12.3079 12.3269C12.2932 12.3201 12.2785 12.3134 12.2638 12.3066L12.0851 12.2243C12.0516 12.2089 12.0241 12.1963 12.0002 12.1854C11.9762 12.1963 11.9488 12.2089 11.9153 12.2243L11.7366 12.3066C11.7219 12.3134 11.7072 12.3201 11.6925 12.3269C11.3858 12.4682 11.0812 12.6086 10.8235 12.6824C10.5438 12.7626 10.1027 12.8286 9.70325 12.5254C9.31608 12.2315 9.24762 11.7997 9.23492 11.5145C9.2228 11.2424 9.25583 10.9023 9.29 10.5504C9.2915 10.5349 9.293 10.5195 9.29451 10.504L9.31418 10.3009C9.31967 10.2443 9.32375 10.202 9.32674 10.1657C9.30484 10.1394 9.27885 10.1089 9.24437 10.0686L9.11422 9.91642C9.10404 9.90452 9.09386 9.89262 9.0837 9.88074C8.85879 9.61786 8.6391 9.36108 8.49455 9.13146C8.33836 8.88336 8.15953 8.49734 8.30124 8.04161C8.44551 7.5777 8.81981 7.36577 9.09595 7.25695C9.34604 7.15839 9.67183 7.08478 9.99964 7.0107C10.0153 7.00717 10.0309 7.00364 10.0465 7.0001L10.2374 6.95691C10.2772 6.94792 10.309 6.94071 10.3363 6.9343C10.352 6.90677 10.3699 6.87459 10.3927 6.83369L10.491 6.65734C10.4988 6.64347 10.5065 6.62961 10.5142 6.61576C10.6839 6.31124 10.8494 6.01421 11.0137 5.79963Z"
                  fill="#000000"
                />
              </svg>
              <span className="font-semibold text-sky-700 text-xl">02</span>
              <span className="break-keep">
                장기요양인정 및 장기요양등급판정
              </span>
            </div>

            <div className="w-full border rounded-xl p-6 flex flex-col items-center gap-4 hover:bg-sky-200">
              <svg
                width="64px"
                height="64px"
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00977 21.39H19.0098C20.0706 21.39 21.0881 20.9685 21.8382 20.2184C22.5883 19.4682 23.0098 18.4509 23.0098 17.39V7.39001C23.0098 6.32915 22.5883 5.31167 21.8382 4.56152C21.0881 3.81138 20.0706 3.39001 19.0098 3.39001H7.00977C5.9489 3.39001 4.93148 3.81138 4.18134 4.56152C3.43119 5.31167 3.00977 6.32915 3.00977 7.39001V12.39"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.00977 18.39H11.0098"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.00977 15.39H5.00977"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.209 5.41992C16.599 16.0599 9.39906 16.0499 3.78906 5.41992"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-semibold text-sky-700 text-xl">03</span>
              <span className="break-keep">
                장기요양인정서, 개인별장기요양 이용계획서 송부
              </span>
            </div>

            <div className="w-full border rounded-xl p-6 flex flex-col items-center gap-4 hover:bg-sky-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64px"
                height="64px"
                viewBox="0 0 1024 1024"
                version="1.1"
              >
                <path
                  d="M182.52 146.2h585.14v256h73.15V73.06H109.38v877.71h256v-73.14H182.52z"
                  fill="#0F1F3C"
                />
                <path
                  d="M255.67 219.34h438.86v73.14H255.67zM255.67 365.63h365.71v73.14H255.67zM255.67 511.91H475.1v73.14H255.67zM775.22 458.24L439.04 794.42l-0.52 154.64 155.68 0.52L930.38 613.4 775.22 458.24z m51.72 155.16l-25.43 25.43-51.73-51.72 25.44-25.44 51.72 51.73z m-77.14 77.15L620.58 819.77l-51.72-51.72 129.22-129.22 51.72 51.72zM511.91 876.16l0.17-51.34 5.06-5.06 51.72 51.72-4.85 4.85-52.1-0.17z"
                  fill="#000000"
                />
              </svg>
              <span className="font-semibold text-sky-700 text-xl">04</span>
              <span className="break-keep">
                장기요양급여이용계약 및 장기요양 급여제공
              </span>
            </div>
          </div>
        </div>

        <div className="w-full mt-32 text-center pb-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-sky-900 mb-12">
            등급판정 기준 및 절차
          </h2>
          <div className="w-full mt-10 flex flex-col items-center justify-center">
            <h3 className="text-xl mb-4">등급판정 기준</h3>
            <Criteria />
          </div>

          <div className="w-full mt-24 flex flex-col items-center justify-center">
            <h3 className="text-xl mb-4">등급판정 절차</h3>
            <MobileProcedure />
            <PCProcedure />
          </div>

          <div className="w-full mt-24 flex flex-col items-center justify-center">
            <h3 className="text-xl mb-4">방문조사</h3>
            <span className=" break-keep mb-4">
              인정신청을 하게 되면 간호사, 사회복지사, 물리치료사 등으로 구성된
              공단 소속장기요양 직원이 직접 방문하여<br className="hidden md:block"/>「장기요양인정조사표」에
              따라 아래의 항목을 조사합니다.
            </span>
            <ServeyItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const PCProcedure = () => {
  return (
    <table className="w-fit text-lg text-center border-separate hidden lg:block">
      <tbody>
        <tr>
          <th rowSpan={3} className="bg-sky-100 rounded-xl p-4 font-semibold">
            인정신청
          </th>
          <th rowSpan={3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              fill="none"
              className="inline"
            >
              <path
                d="M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z"
                fill="#505050"
              />
            </svg>
          </th>
          <th className="bg-slate-200 rounded-xl p-2 font-medium">방문조사</th>
          <th rowSpan={3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              fill="none"
              className="inline"
            >
              <path
                d="M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z"
                fill="#505050"
              />
            </svg>
          </th>
          <th colSpan={5} className="bg-slate-200 rounded-xl p-2  font-medium">
            등급판정
          </th>
          <th rowSpan={3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              fill="none"
              className="inline"
            >
              <path
                d="M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z"
                fill="#505050"
              />
            </svg>
          </th>
          <th
            rowSpan={3}
            className="bg-sky-600 text-white rounded-xl p-4 font-medium"
          >
            {" "}
            1 ~ 5,
            <br />
            인지지원
            <br />
            등급
          </th>
        </tr>
        <tr>
          <td className="p-2"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="border border-slate-200 rounded-xl p-4">
            <span className="font-semibold">
              &apos;장기요양인정조사표&apos;
            </span>
            에 의한
            <br />
            1. 52개 항목 조사
            <br />
            2. 특이사항 조사
          </td>

          <td className="border border-slate-200 rounded-xl p-4">
            장기요양인정
            <br />
            점수산정
          </td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              fill="none"
              className="inline"
            >
              <path
                d="M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z"
                fill="#505050"
              />
            </svg>
          </td>
          <td className="border border-slate-200 rounded-xl p-4">
            의사소견서 제출
          </td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              fill="none"
              className="inline"
            >
              <path
                d="M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z"
                fill="#505050"
              />
            </svg>
          </td>
          <td className="border border-slate-200 rounded-xl p-4">
            장기요양등급
            <br />
            판정위원회
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const MobileProcedure = () => {
  return (
    <table className="w-full text-center border-separate lg:hidden">
      <tbody>
        <tr>
          <th colSpan={3} className="bg-sky-100 rounded-xl p-4 font-semibold">
            인정신청
          </th>
        </tr>

        <tr>
          <td colSpan={3} className="py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              fill="none"
              className="inline"
            >
              <path
                d="M8.72798 15.795L3.72798 7.795C3.10356 6.79593 3.82183 5.5 4.99998 5.5L15 5.5C16.1781 5.5 16.8964 6.79593 16.272 7.795L11.272 15.795C10.6845 16.735 9.31549 16.735 8.72798 15.795Z"
                fill="#505050"
              />
            </svg>
          </td>
        </tr>

        <tr>
          <th className="bg-slate-200 rounded-xl">방문조사</th>
          <td className=""></td>
          <td className="border border-slate-200 rounded-xl p-2">
            <span className="font-semibold">
              &apos;장기요양인정조사표&apos;
            </span>
            에 의한
            <br />
            1. 65개 항목 조사
            <br />
            2. 25개 욕구 조사
          </td>
        </tr>
        <tr>
          <td colSpan={2} className=""></td>
          <td className="py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              fill="none"
              className="inline"
            >
              <path
                d="M8.72798 15.795L3.72798 7.795C3.10356 6.79593 3.82183 5.5 4.99998 5.5L15 5.5C16.1781 5.5 16.8964 6.79593 16.272 7.795L11.272 15.795C10.6845 16.735 9.31549 16.735 8.72798 15.795Z"
                fill="#505050"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <th rowSpan={5} className="bg-slate-200 rounded-xl">
            등급
            <br />
            판정
          </th>
          <td className=""></td>
          <td className="border border-slate-200 rounded-xl p-2">
            장기요양인정
            <br />
            점수산정
          </td>
        </tr>
        <tr>
          <td className=""></td>
          <td className="py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              fill="none"
              className="inline"
            >
              <path
                d="M8.72798 15.795L3.72798 7.795C3.10356 6.79593 3.82183 5.5 4.99998 5.5L15 5.5C16.1781 5.5 16.8964 6.79593 16.272 7.795L11.272 15.795C10.6845 16.735 9.31549 16.735 8.72798 15.795Z"
                fill="#505050"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <td className=""></td>
          <td className="border border-slate-200 rounded-xl p-2">
            의사소견서 제출
          </td>
        </tr>
        <tr>
          <td className=""></td>
          <td className="py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              className="inline"
              fill="none"
            >
              <path
                d="M8.72798 15.795L3.72798 7.795C3.10356 6.79593 3.82183 5.5 4.99998 5.5L15 5.5C16.1781 5.5 16.8964 6.79593 16.272 7.795L11.272 15.795C10.6845 16.735 9.31549 16.735 8.72798 15.795Z"
                fill="#505050"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <td className=""></td>
          <td className="border border-slate-200 rounded-xl p-2">
            장기요양등급
            <br />
            판정위원회
          </td>
        </tr>
        <tr>
          <td colSpan={3} className="py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              className="inline"
              fill="none"
            >
              <path
                d="M8.72798 15.795L3.72798 7.795C3.10356 6.79593 3.82183 5.5 4.99998 5.5L15 5.5C16.1781 5.5 16.8964 6.79593 16.272 7.795L11.272 15.795C10.6845 16.735 9.31549 16.735 8.72798 15.795Z"
                fill="#505050"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <td
            className="bg-sky-600 text-white rounded-xl p-4 font-semibold"
            colSpan={3}
          >
            1 ~ 5, 인지지원 등급
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Criteria = () => {
  return (
    <table className="w-[80%] text-lg">
      <tbody>
        <tr className="bg-sky-100">
          <th className="w-[15%] p-4 border-r border-b border-sky-300">등급</th>
          <th className="text-left p-4 border-r border-b border-sky-300">
            심신의 기능상태
          </th>
          <th className="p-4 border-b border-sky-300">장기요양인정점수</th>
        </tr>
        <tr>
          <td className="p-2 border-r border-b border-slate-200">1등급</td>
          <td className="p-2 text-left border-r border-b border-slate-200">
            심신의 기능상태 장애로 일상생활에서 전적으로 다른 사람의 도움이
            필요한 자
          </td>
          <td className="p-2 border-b border-slate-200">95점이상</td>
        </tr>
        <tr>
          <td className="p-2 border-r border-b border-slate-200">2등급</td>
          <td className="p-2 text-left border-r border-b border-slate-200">
            심신의 기능상태 장애로 일상생활에서 상당 부분 다른 사람의 도움이
            필요한 자
          </td>
          <td className="p-2 border-b border-slate-200">75점이상 95점 미만</td>
        </tr>
        <tr>
          <td className="p-2 border-r border-b border-slate-200">3등급</td>
          <td className="p-2 text-left border-r border-b border-slate-200">
            심신의 기능상태 장애로 일상생활에서 부분적으로 다른 사람의 도움이
            필요한 자
          </td>
          <td className="p-2 border-b border-slate-200">60점 이상 75점 미만</td>
        </tr>
        <tr>
          <td className="p-2 border-r border-b border-slate-200">4등급</td>
          <td className="p-2 text-left border-r border-b border-slate-200">
            심신의 기능상태 장애로 일상생활에서 일정 부분 다른 사람의 도움이
            필요한 자
          </td>
          <td className="p-2 border-b border-slate-200">51점 이상 60점 미만</td>
        </tr>
        <tr>
          <td className="p-2 border-r border-b border-slate-200">5등급</td>
          <td className="p-2 text-left border-r border-b border-slate-200">
            치매환자(노인장기요양보험법 시행령 제2조에 따른 노인성 질병으로
            한정)
          </td>
          <td className="p-2 border-b border-slate-200">45점 이상 51점 미만</td>
        </tr>
        <tr>
          <td className="p-2 border-r border-b border-slate-200">
            인지지원등급
          </td>
          <td className="p-2 text-left border-r border-b border-slate-200">
            치매환자(노인장기요양보험법 시행령 제2조에 따른 노인성 질병으로
            한정)
          </td>
          <td className="p-2 border-b border-slate-200">45점 미만</td>
        </tr>
      </tbody>
    </table>
  );
};

const ServeyItems = () => {
  return (
    <table className="w-full lg:text-lg">
      <colgroup>
        <col className="w-[20%]" />
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr className="border-t-2 border-sky-500">
          <th className="p-2 bg-slate-200 border-b border-r border-slate-300">
            영역
          </th>
          <th
            className="p-2 bg-slate-200 border-b border-slate-300"
            scope="colgroup"
            colSpan={5}
          >
            항목
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th
            className="p-2 bg-slate-200 border-b border-r border-slate-300"
            scope="row"
          >
            신체기능
            <br />
            (12항목)
          </th>
          <td colSpan={5} className="border-b border-slate-300">
            <ul className="grid grid-cols-3 p-2 text-left">
              <li>· 옷벗고 입기</li>
              <li>· 세수하기</li>
              <li>· 양치질하기</li>
              <li>· 식사하기</li>
              <li>· 목욕하기</li>
              <li>· 체위변경하기</li>
              <li>· 일어나 앉기</li>
              <li>· 옮겨앉기</li>
              <li>· 방밖으로 나오기</li>
              <li>· 화장실 사용하기</li>
              <li>· 대변 조절하기</li>
              <li>· 소변 조절하기</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th
            className="p-2 bg-slate-200 border-b border-r border-slate-300"
            scope="row"
          >
            인지기능
            <br />
            (7항목)
          </th>
          <td colSpan={5} className="border-b border-slate-300">
            <ul className="grid grid-cols-3 p-2 text-left">
              <li>· 단기 기억장애</li>
              <li>· 지시불인지</li>
              <li>· 날짜불인지</li>
              <li>· 상황판단력 감퇴</li>
              <li>· 장소불인지</li>
              <li>· 의사소통/전달장애</li>
              <li>· 나이/생년월일 불인지</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th
            className="p-2 bg-slate-200 border-b border-r border-slate-300"
            scope="row"
          >
            행동변화
            <br />
            (14항목)
          </th>
          <td colSpan={5} className="border-b border-slate-300">
            <ul className="grid grid-cols-3 p-2 text-left">
              <li>· 망상</li>
              <li>· 서성거림,안절부절못함</li>
              <li>· 물건 망가트리기</li>
              <li>· 환청,환각</li>
              <li>· 길을 잃음</li>
              <li>· 돈/물건감추기</li>
              <li>· 슬픈상태,울기도함</li>
              <li>· 폭언,위협행동</li>
              <li>· 부적절한 옷입기</li>
              <li>· 불규칙수면,주야혼돈</li>
              <li>· 밖으로 나가려함</li>
              <li>· 대/소변 불결행위</li>
              <li>· 도움에 저항</li>
              <li>· 의미가 없거나 부적절한 행동</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th
            className="p-2 bg-slate-200 border-b border-r border-slate-300"
            scope="row"
          >
            간호처치
            <br />
            (9항목)
          </th>
          <td colSpan={5} className="border-b border-slate-300">
            <ul className="grid grid-cols-3 p-2 text-left">
              <li>· 기관지절개관 간호</li>
              <li>· 경관영양</li>
              <li>· 도뇨관리</li>
              <li>· 흡인</li>
              <li>· 욕창간호</li>
              <li>· 장루간호</li>
              <li>· 산소요법</li>
              <li>· 암성통증간호</li>
              <li>· 투석간호</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th
            className="p-2 bg-slate-200 border-b border-r border-slate-300"
            scope="rowgroup"
            rowSpan={2}
          >
            재활
            <br />
            (10항목)
          </th>
          <td colSpan={2} className="border-b border-r border-slate-300">
            운동장애(4항목)
          </td>
          <td colSpan={3} className="border-b border-slate-300">
            관절제한(6항목)
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="border-b border-r border-slate-300">
            <ul className="grid grid-cols-2 p-2 text-left">
              <li>· 우측상지</li>
              <li>· 우측하지</li>
              <li>· 좌측상지</li>
              <li>· 좌측하지</li>
            </ul>
          </td>
          <td colSpan={3} className="border-b border-slate-300">
            <ul className="grid grid-cols-2 p-2 text-left">
              <li>· 어깨관절</li>
              <li>· 팔꿈치관절</li>
              <li>· 손목 및 수지관절</li>
              <li>· 고관절</li>
              <li>· 무릎관절</li>
              <li>· 발목관절</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
};