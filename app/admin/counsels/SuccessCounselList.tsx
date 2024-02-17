import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCounselList } from "@/lib/actions/counsel.actions";
import { Counsel } from "./page";
import { formatPhoneNumber } from "@toss/utils";

export const SuccessCounselList = async () => {
  const response = await getCounselList("success");

  const counsels: Counsel[] = response.counsels;

  return (
    <Table className="w-full">
      <TableCaption>완료된 상담 목록입니다.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden lg:table-cell">번호</TableHead>
          <TableHead>상태</TableHead>
          <TableHead>이름</TableHead>
          <TableHead>전화번호</TableHead>
          <TableHead>상담 요청 시간</TableHead>
          <TableHead className="max-w-[50%] text-left">상담 내용</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {counsels.map((counsel) => (
          <TableRow key={counsel.cid}>
            <TableCell className="hidden lg:table-cell">
              {counsel.cid}
            </TableCell>
            <TableCell>
              {counsel.status === "pending" ? "대기중" : "완료"}
            </TableCell>
            <TableCell className="text-left break-all">
              {counsel.name}
            </TableCell>
            <TableCell className="text-left break-all">
              {formatPhoneNumber(counsel.phone)}
            </TableCell>
            <TableCell className="text-left break-all">
              {counsel.prefer_time}
            </TableCell>
            <TableCell className="w-[40%] text-left break-keep">
              {counsel.content}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
