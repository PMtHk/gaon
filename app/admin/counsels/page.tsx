import { Separator } from "@/components/ui/separator";
import { PendingCounselList } from "./PendingCounselList";
import { SuccessCounselList } from "./SuccessCounselList";

export type Counsel = {
  _id: string;
  cid: number;
  status: string;
  name: string;
  phone: string;
  prefer_time: string;
  content: string;
};

const Page = async () => {
  return (
    <div className="mt-10 mb-10 p-1">
      <div className="w-full h-full flex flex-col gap-y-10">
        <div>
          <p className="ml-2 text-lg mb-6">신규 상담 목록</p>
          <PendingCounselList />
        </div>
        <Separator />
        <div>
          <p className="ml-2 text-lg mb-6">완료된 상담 목록</p>
          <SuccessCounselList />
        </div>
      </div>
    </div>
  );
};

export default Page;
