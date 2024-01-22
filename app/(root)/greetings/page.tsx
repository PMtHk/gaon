const Page = () => {
  return (
    <div className="container w-full min-h-[100vh-64px] md:min-h-[100vh-80px]">
      <div className="mt-10 mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex flex-col items-center text-sky-900">
          <span className="text-base md:text-lg lg:text-xl font-light text-pink-600">
            Greetings
          </span>
          인사말
        </h1>
      </div>

      <div className="flex justify-center p-4">
        <div className="text-left text-lg max-w-[800px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            interdum dolor mollis lectus auctor vehicula. In commodo ornare
            porttitor. Nulla facilisi. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Nullam lacinia urna mollis, viverra ipsum quis,
            fringilla ex. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Fusce non condimentum magna. Curabitur quis leo sagittis,
            mattis lectus sed, pulvinar tellus. Donec vitae dui et magna pretium
            interdum.
            <br />
            <br />
            Sed at vehicula lacus. In posuere rhoncus ligula, ac aliquam nisi
            aliquet id. Proin dictum risus orci, iaculis commodo enim congue
            vitae. Maecenas vehicula, ligula at pulvinar tincidunt, neque mi
            maximus nisi, in faucibus nisl ligula eu mi. In ex lectus, malesuada
            eu arcu sit amet, ultricies sodales sapien.
            <br />
            <br />
            Cras libero magna, imperdiet id congue nec, vulputate ac diam.
            Praesent vel nulla auctor, cursus tortor in, posuere mauris.
          </p>
          <p className="text-right align-text-bottom mt-10 mr-4 text-slate-600">
            센터장/사회복지사
            <span className="text-black text-2xl font-semibold">
              {" "}
              이 윤 정{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
