"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchProps {
  search: string;
}

const Search = ({ search = "" }: SearchProps) => {
  const router = useRouter();

  const [input, setInput] = useState(search);

  const onClick = () => {
    router.push(`/notices?search=${input}`);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClick();
    }
  }

  return (
    <div className="w-full flex flex-row justify-center items-center px-2" onKeyDown={onKeyDown}>
      <input
        type="text"
        aria-label="공지사항 검색어 입력란"
        required
        onChange={onChange}
        value={input}
        placeholder="검색어를 입력해주세요"
        className="w-full max-w-[420px] h-10 md:h-12 rounded-l-xl border border-gray-300 px-4 text-lg text-sky-900 outline-none"
      />
      <button
        className="w-20 h-10 md:h-12 rounded-r-xl bg-sky-900 text-lg text-slate-50"
        onClick={onClick}
      >
        검색
      </button>
    </div>
  );
};

export default Search;
